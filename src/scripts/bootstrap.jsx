import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import App from "./components/App";
import stores from "./stores";

import "./shortcuts/FileShortcuts";

render(
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
