import React      from "react";
import { render } from "react-dom";
import App        from "./components/App.react";

const { Window } = nw;
const MainWin    = Window.get();
const MainMenu   = require( "./natives/MainMenuNative" )();

require( "./natives/FileMenuNative" )( MainMenu );
require( "./natives/FormatMenuNative" )( MainMenu );
require( "./natives/AboutMenuNative" )( MainMenu );

// Menu should be added here, because it appears empty on windows if it is bound
// to the window before it's children are appended:
MainWin.menu = MainMenu;

render( <App />, document.getElementById( "app" ) );
