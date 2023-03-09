import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )
// 创建root并暴露出去
export const root = createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);