import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createRoot } from "react-dom/client";

import reducer from "./redux/reducer/index";

import App from "./pages/App/App";

import "./assets/css/index.css";

const store = createStore(reducer, composeWithDevTools());
const element = document.getElementById("root");
const root = createRoot(element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
