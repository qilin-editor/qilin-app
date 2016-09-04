require( "babel-register" )( {
    "presets"    : [ "react", "es2015", "stage-0" ],
    "plugins"    : [ "add-module-exports" ],
    "extensions" : [ ".js" ]
} );

require( "./scripts/bootstrap" );
