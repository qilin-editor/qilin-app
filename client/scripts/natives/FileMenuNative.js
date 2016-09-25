import EditorActions from "../actions/EditorActions";

export default MainMenu => {
    const { Menu, MenuItem } = nw;
    const FileMenu           = new Menu();

    FileMenu.append( new MenuItem( {
        label     : "New file",
        click     : () => { /* To implement */ },
        key       : "n",
        modifiers : "cmd",
    } ) );

    FileMenu.append( new MenuItem( {
        label     : "Open file",
        click     : () => EditorActions.requestOpenFile(),
        key       : "o",
        modifiers : "cmd",
    } ) );

    FileMenu.append( new MenuItem( {
        label     : "Save file as...",
        click     : () => EditorActions.requestSaveFile(),
        key       : "s",
        modifiers : "cmd",
    } ) );

    FileMenu.append( new MenuItem( {
        type : "separator",
    } ) );

    FileMenu.append( new MenuItem( {
        label     : "Find in file",
        click     : () => { /* To implement */ },
        key       : "f",
        modifiers : "cmd",
    } ) );

    MainMenu.append( new MenuItem( { label : "File", submenu : FileMenu } ) );

    return FileMenu;
};
