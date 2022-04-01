import React from "react";
import ReactDOM from "react-dom";
import "../src/styled/css/index.css";
import App from "./App";
import Layout from "./components/Layout";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
     
        <App />
     
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
