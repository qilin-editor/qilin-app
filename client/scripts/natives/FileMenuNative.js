import EditorConstants  from "../constants/EditorConstants";
import EditorActions    from "../actions/EditorActions";
import EditorStore      from "../stores/EditorStore";

export default MainMenu => {
    const { Menu, MenuItem } = nw;
    const FileMenu           = new Menu();

    FileMenu.append( new MenuItem( {
        label       : "New file",
        click       : () => { },
        key         : "n",
        modifiers   : "cmd"
    } ) );

    FileMenu.append( new MenuItem( {
        label       : "Open file",
        click       : () => EditorActions.requestOpenFile(),
        key         : "o",
        modifiers   : "cmd"
    } ) );

    FileMenu.append( new MenuItem( {
        label       : "Save file as...",
        click       : () => EditorActions.requestSaveFile(),
        key         : "s",
        modifiers   : "cmd"
    } ) );

    FileMenu.append( new MenuItem( {
        type : "separator"
    } ) );

    FileMenu.append( new MenuItem( {
        label       : "Find in file",
        click       : () => { },
        key         : "f",
        modifiers   : "cmd"
    } ) );

    MainMenu.append( new MenuItem( { label : "File", submenu : FileMenu } ) );

    return FileMenu;
};
