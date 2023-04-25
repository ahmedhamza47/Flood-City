import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { DataProvider } from "./Components/context/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient();
root.render(

  <DataProvider>

  <Auth0Provider
    domain="dev-getn3nuj1qo3kwft.us.auth0.com"
    clientId="JC17KandIa49HYBRLjJwdrTwsDv9sz2L"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </Auth0Provider>
      </DataProvider>
);
