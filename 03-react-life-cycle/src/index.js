import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Akshay from './HOC/Akshay';
import Rohan from './HOC/Rohan';
import Abhishek from './HOC/Abhishek';

// import ProductUpdate from './classLifeCycle/ProductUpdate';
// import LifeCycleA from './classLifeCycle/LifeCycleA';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LifeCycleA/> */}

    {/* <ProductUpdate/> */}

    <Akshay />
    <Rohan />
    <Abhishek />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
