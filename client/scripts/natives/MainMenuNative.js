export default () => {
    const { Menu } = nw;
    const mainMenu = new Menu( { type : "menubar" } );

    // `createMacBuiltin` crashes the app on Windows and possibly on Linux:
    if ( process.platform === "darwin" )
        mainMenu.createMacBuiltin( "Qilin" );

    return mainMenu;
};
