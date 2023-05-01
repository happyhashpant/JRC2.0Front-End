import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={`${process.env.REACT_APP_AUTH_DOMAIN}`}
      clientId={`${process.env.REACT_APP_AUTH_CLIENT_ID}`}
      authorizationParams={{
        redirect_uri: "http://localhost:3000/home",
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
