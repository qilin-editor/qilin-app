import React        from "react";
import { render }   from "react-dom";
import App          from "./components/App.react";

import "./shortcuts/FileShortcuts";
import "codemirror/mode/gfm/gfm";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/scroll/scrollpastend";
import "codemirror/addon/scroll/simplescrollbars";
import "codemirror/addon/search/searchcursor";
import "codemirror/addon/search/search";
import "codemirror/addon/selection/active-line";
import "codemirror/addon/dialog/dialog";
import "codemirror/keymap/sublime";
import "markdown-it-asciimath/ASCIIMathTeXImg";

render( <App />, document.getElementById( "app" ) );
