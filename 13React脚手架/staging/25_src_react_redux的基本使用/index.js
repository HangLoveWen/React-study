import React from "react";
import { createRoot } from "react-dom/client";
import App from "../src/App";
createRoot(document.getElementById('root')).render(<App />)
// 检测redux中状态的改变，若redux的状态发生改变，那么重新渲染App组件
