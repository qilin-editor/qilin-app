import React from "react";
import { render } from "react-dom";
import App from "./components/App.react";
const { Window } = nw;

const mainWin = Window.get();
const MainMenu = require("./natives/MainMenuNative")();

require("./natives/FileMenuNative")(MainMenu);
require("./natives/FormatMenuNative")(MainMenu);
require("./natives/AboutMenuNative")(MainMenu);

mainWin.menu = MainMenu; //menu should be added here, because it appears empty on windows if it is bound to the window before it's children are appended

render(<App />, document.getElementById("app"));
