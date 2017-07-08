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
// fs.watch( "./shared", { recursive : true }, reloadWithoutCache );
// fs.watch( "./server", { recursive : true }, reloadWithoutCache );
