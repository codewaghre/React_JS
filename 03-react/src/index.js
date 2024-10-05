import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseReducer from './componets/UseReducer';
import UseRef  from './componets/UseRef';
import UseRef02 from './componets/UseRef02';
import UseLayout from './componets/UseLayout';
import UseTransition from './componets/UseTransition';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseReducer/> */}
    {/* <UseRef/> */}
    {/* <UseRef02/> */}
    {/* <UseLayout/> */}

    <UseTransition/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();