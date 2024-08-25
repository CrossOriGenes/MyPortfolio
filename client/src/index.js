import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <App />
    <ToastContainer
      position="bottom-left"
      autoClose={6000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      draggable
      pauseOnHover
      theme="dark"
    />
  </AuthContextProvider>
);

