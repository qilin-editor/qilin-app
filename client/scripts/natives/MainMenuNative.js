export default () => {
    const { Menu, Window } = nw;
    const mainWin          = Window.get();
    const mainMenu         = new Menu( { type : "menubar" } );

    mainMenu.createMacBuiltin( "Qilin" );
    mainWin.menu = mainMenu;

    return mainMenu;
};
