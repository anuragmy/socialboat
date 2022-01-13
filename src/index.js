import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "rsuite/lib/styles/index.less"; // or 'rsuite/dist/styles/rsuite-default.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
