import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import List from './component/List'
import App from './component/App'
import reportWebVitals from './reportWebVitals';
import data from './json/data.json' 
import Count from './component/Count';
import Multiple from './component/HandleMutiple';

import MultipleStateAtOne from './component/MultilpleStateAtOne';


// const data = [
//   {
//   image: "https://picsum.photos/id/1011/800/450",
//   //  title : "This is some title",
//   describe: "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas."

// },
//   {
//   image: "https://picsum.photos/id/1011/800/450",
//   title: "This is some title",
//   describe: "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas."
// }] 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>

      {/* Props in react js */}
        {/* {data.map((data) => {
        return <App image={data.image} title={data.title} describe={data.describe} />
      })} 

        <App image={ data[0].image}  title ={data[0].title} describe={data[0].describe}  />
    <App image={data.image} title={data.title} describe={data.describe} />  */}

      
      {/* <Count/> */}

      {/* <List/> */}

      {/* <Multiple/> */}

      <MultipleStateAtOne/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
