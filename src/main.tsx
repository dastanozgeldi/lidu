import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="max-w-[60ch] mx-auto p-6">
      <App />
    </main>
  </React.StrictMode>
);
