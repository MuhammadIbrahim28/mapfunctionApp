import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./Components/App.jsx";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
