import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
declare global {
  interface Window {
    renderBrowse: (containerId: string, history?: any) => void;
  }

}

window.renderBrowse = (containerId, history) => {
  ReactDOM.render(<App history={history}/>, document.getElementById(containerId));
};
// if(process.env.NODE_ENV === "development"){
//   window.renderBrowse('root')
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
