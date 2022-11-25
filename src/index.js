import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./pages/App/App";
import "./assets/css/index.css";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from './redux/stores';
import { createRoot } from "react-dom/client";

const element = document.getElementById("root");
const root = createRoot(element);
root.render(
  <React.StrictMode>
    <Router>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </Router>
  </React.StrictMode>
);
