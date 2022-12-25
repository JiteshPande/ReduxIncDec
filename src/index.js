import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './Store';
 import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
 Store.subscribe(()=>{console.log(Store.getState())});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Provider store={Store}>
      <App />
      
  </Provider>
  


  
);

reportWebVitals();
