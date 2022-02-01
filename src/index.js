import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home/Home';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloFunctional from './components/HelloFunctional';
// import HelloStateFull from './containers/HelloStateFull';



ReactDOM.render(
  <React.StrictMode>
{/*     
    <HelloFunctional />
    <HelloStateFull/> */}

    <Home/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
