import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeContextProvider from "./store/ThemeContext.jsx";
import ProjectsContextProvider from "./store/ProjectsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ProjectsContextProvider>
        <App />
      </ProjectsContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
