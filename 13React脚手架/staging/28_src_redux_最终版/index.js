import React from "react";
import { createRoot } from "react-dom/client";
import App from "../src/App";
import store from "./redux/store";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>)
// 检测redux中状态的改变，若redux的状态发生改变，那么重新渲染App组件
