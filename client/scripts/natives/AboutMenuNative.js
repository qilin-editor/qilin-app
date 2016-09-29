import open from "opn";

export default MainMenu => {
    const { Menu, MenuItem } = nw;
    const AboutMenu          = new Menu();

    AboutMenu.append( new MenuItem( {
        label : "Author website",
        click : () => open( "http://laniewski.me/" ),
    } ) );

    AboutMenu.append( new MenuItem( {
        type : "separator",
    } ) );

    AboutMenu.append( new MenuItem( {
        label : "Report a bug",
        click : () => open( "https://github.com/Bartozzz/Qilin/issues" ),
    } ) );

    AboutMenu.append( new MenuItem( {
        label : "Feedback",
        click : () => open( "mailto:laniewski.bartozzz@gmail.com" ),
    } ) );

    MainMenu.append( new MenuItem( {
        label   : "About",
        submenu : AboutMenu,
    } ) );

    return AboutMenu;
};
