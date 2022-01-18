import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { setupAxios } from "./utils/utils";
import { store } from "./store/store";
import axios from "axios";
import { BASE_URL } from "./constants";

setupAxios(axios, store);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
