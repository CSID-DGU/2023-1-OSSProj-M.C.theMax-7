import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import "./index.css";
import "./assets/fonts/font.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <RecoilRoot>
      <App />
    </RecoilRoot>
);
