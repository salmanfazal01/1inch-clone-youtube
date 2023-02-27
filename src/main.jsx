import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../src/utils/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
