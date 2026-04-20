import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Root element (index.html se connect hota hai)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);