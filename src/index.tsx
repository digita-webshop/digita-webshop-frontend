import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "components/ErrorBoundry/ErrorBoundry";

const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider context={helmetContext}>
            <App />
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
