import { createSlice ,  createAsyncThunk } from "@reduxjs/toolkit";

//create Action 
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    const response = await fetch("https://670cf7337e5a228ec1d22252.mockapi.io/crud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

//Resd Option 
export const showUser = createAsyncThunk("showUser", async (data, { rejectWithValue }) => {
    const response = await fetch("https://670cf7337e5a228ec1d22252.mockapi.io/crud", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

//delete Option 
export const deleteUser = createAsyncThunk("deleteUser", async (id,{ rejectWithValue }) => {
    const response = await fetch(`https://670cf7337e5a228ec1d22252.mockapi.io/crud/${id}`, {
        method: "DELETE",
    })

    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

//edit Option 
export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
    const response = await fetch(`https://670cf7337e5a228ec1d22252.mockapi.io/crud/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    

    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

//main UseDetail redcuer
export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: []
    },

    reducers: {
        searchUser: (state, action) => {
            state.searchData = action.payload
        }
    },

    extraReducers: (builder) => {
        //for create User 
        builder.addCase(createUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false
            state.users.push(action.payload)
        })
        builder.addCase(createUser.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = action.payload.massage
            state.error = true
        })

        //Bilder for read User
        builder.addCase(showUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(showUser.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })
        builder.addCase(showUser.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = action.payload.massage
            state.error = true
        })

        //Builder for Delete User
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false
            const { id } = action.payload
            
            if (id) {
                state.users = state.users.filter((data) => data.id !== id)
            }

            // console.log(action.payload);
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = true
        })

        //Update User
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false
            
            
            state.users = state.users.map((data) => data.id === action.payload.id ? action.payload : data)

            console.log(action.payload);
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.error = action.payload.massage
            state.error = true
        })
    }
})

export default userDetail.reducer
export const { searchUser } = userDetail.actions;