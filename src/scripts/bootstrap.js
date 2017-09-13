import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import App from "./components/App";

import "codemirror/mode/gfm/gfm";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/scroll/scrollpastend";
import "codemirror/addon/scroll/simplescrollbars";
import "codemirror/addon/search/searchcursor";
import "codemirror/addon/search/search";
import "codemirror/addon/selection/active-line";
import "codemirror/addon/dialog/dialog";
import "codemirror/keymap/sublime";
import "./shortcuts/FileShortcuts";

const stores = {
    alertsStore: require("./stores/AlertStore"),
    editorStore: require("./stores/EditorStore"),
};

render((
    <Provider {...stores}>
        <App />
    </Provider>
), document.getElementById("app"));
