import React        from "react";
import { render }   from "react-dom";
import App          from "./components/App.react";

const MainMenu   = require( "./natives/MainMenuNative" )();
const FileMenu   = require( "./natives/FileMenuNative" )( MainMenu );
const FormatMenu = require( "./natives/FormatMenuNative" )( MainMenu );

render( <App />, document.getElementById( "app" ) );
