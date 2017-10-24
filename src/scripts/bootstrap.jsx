import React from "react";
import {render} from "react-dom";
import {Provider} from "mobx-react";
import App from "./components/App";
import "./shortcuts/FileShortcuts";

const stores = {
  editorStore: require("./stores/EditorStore"),
};

render((
  <Provider {...stores}>
    <App />
  </Provider>
), document.getElementById("app"));
