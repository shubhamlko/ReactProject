import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './Component/Redux/Store';
import AppContextProvider from './Component/Appcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>

 
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>

  </BrowserRouter>
  </AppContextProvider>
);


reportWebVitals();
