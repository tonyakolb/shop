import React from "react";
import { Provider } from "react-redux";

import App from "./pages/App/App";
import './assets/css/index.css';
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/stores";
import { createRoot } from "react-dom/client";

const element = document.getElementById("root");
const root = createRoot(element);
root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
