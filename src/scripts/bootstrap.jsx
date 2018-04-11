import React from "react";
import {render} from "react-dom";
import {HashRouter} from "react-router-dom";
import {Provider} from "mobx-react";
import App from "./components/App";
import "./shortcuts/FileShortcuts";

const stores = {
  editorStore: require("./stores/EditorStore"),
  themeStore: require("./stores/ThemeStore"),
};

render((
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById("app"));
