import React from 'react';
import ReactDOM from 'react-dom';
import Product from './containers/product/product';
import YouTube from './containers/YouTube/YouTube';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloFunctional from './components/StatelessComp/HelloFunctional';
import HelloStateFull from './containers/StateFullComp/HelloStateFull';
import LifeCycleComp from './containers/LifeCycleComp/LifeCycleComp';
import Blogspot from './containers/Blogspot/Blogspot';



ReactDOM.render(
  <React.StrictMode>
    
    {/* <HelloFunctional/>
    <HelloStateFull/>
    
    <YouTube/>
    <LifeCycleComp/>
  <Product/> */}

  <Blogspot/>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
