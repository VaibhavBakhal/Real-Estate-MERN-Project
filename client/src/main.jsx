import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_DOMAIN}
      clientId={import.meta.env.VITE_CLIENTID}
      authorizationParams={{
<<<<<<< HEAD
        redirect_uri: "https://real-estate-mern-project-eight.vercel.app",
=======
        redirect_uri: "https://real-estate-ef1fz2cum-vaibhavbakhal.vercel.app",
>>>>>>> new-origin1/master
      }}
      audience={import.meta.env.VITE_AUDIENCE}
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
