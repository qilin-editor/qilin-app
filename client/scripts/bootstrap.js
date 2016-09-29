import React        from "react";
import { render }   from "react-dom";
import App          from "./components/App.react";

const MainMenu   = require( "./natives/MainMenuNative" )();

require( "./natives/FileMenuNative" )( MainMenu );
require( "./natives/FormatMenuNative" )( MainMenu );
require( "./natives/AboutMenuNative" )( MainMenu );

render( <App />, document.getElementById( "app" ) );
