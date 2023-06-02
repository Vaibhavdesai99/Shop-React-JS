import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './Components/Store/Cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <CartProvider>
 <App />
 </CartProvider>
   
  
);
