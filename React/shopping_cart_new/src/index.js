import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";
import { Toaster } from "react-hot-toast";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store={Store}>
    <App/>
    <Toaster position="top-center"/>
  </Provider>
  </BrowserRouter>
);
