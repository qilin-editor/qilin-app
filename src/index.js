import "./styles/template.scss";
import "./scripts/bootstrap.js";

if ( process.NODE_ENV === "development" ) {
    require( "nw-dev" );
}
