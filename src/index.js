import React from "react";
import ReactDOM from "react-dom";

import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
