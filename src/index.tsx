import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
declare global {
  interface Window {
    renderStaffing: (root:any, containerId: string, history?: any) => void;
    unmountStaffing: (containerId: string) => void;
  }
  interface Document {
    heroCode: Function;
  }
}

document.heroCode = () => {
  console.log("heroCode");
}

window.renderStaffing = (root, containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    root.getElementById(containerId)
  );
};

window.unmountStaffing = containerId => {
  ReactDOM.unmountComponentAtNode(
    document.getElementById(containerId) as Element
  );
};
// if(process.env.NODE_ENV === "development"){
//   window.renderBrowse('root')
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
