const fs = require( "fs" );

function reloadWithoutCache() {
    for ( const module in global.require.cache ) {
        delete global.require.cache[ module ];
    }

    if ( location ) {
        location.reload();
    }
}

fs.watch( "./client", { recursive : true }, reloadWithoutCache );
