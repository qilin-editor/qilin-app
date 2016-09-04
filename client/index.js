require( "babel-register" )( {
    "presets"    : [ "react", "es2015", "stage-0" ],
    "plugins"    : [ "add-module-exports", "transform-decorators-legacy" ],
    "extensions" : [ ".js" ]
} );

require( "./scripts/bootstrap" );
