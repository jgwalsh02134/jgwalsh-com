// 1. Import Tailwind’s generated CSS before anything else
import "./index.css";

// 2. Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// 3. Import the root component
import App from "./App";

// 4. Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
