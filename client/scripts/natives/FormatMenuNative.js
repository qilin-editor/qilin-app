import EditorConstants  from "../constants/EditorConstants";
import EditorActions    from "../actions/EditorActions";
import EditorStore      from "../stores/EditorStore";

export default MainMenu => {
    const { Menu, MenuItem } = nw;
    const FormatMenu           = new Menu();

    FormatMenu.append( new MenuItem( {
        label       : "Header 1",
        click       : () => { },
        key         : "1",
        modifiers   : "cmd"
    } ) );

    FormatMenu.append( new MenuItem( {
        label       : "Header 2",
        click       : () => { },
        key         : "2",
        modifiers   : "cmd"
    } ) );

    FormatMenu.append( new MenuItem( {
        label       : "Header 3",
        click       : () => { },
        key         : "3",
        modifiers   : "cmd"
    } ) );

    FormatMenu.append( new MenuItem( {
        label       : "Header 4",
        click       : () => { },
        key         : "4",
        modifiers   : "cmd"
    } ) );

    FormatMenu.append( new MenuItem( {
        label       : "Header 5",
        click       : () => { },
        key         : "5",
        modifiers   : "cmd"
    } ) );

    FormatMenu.append( new MenuItem( {
        label       : "Header 6",
        click       : () => { },
        key         : "6",
        modifiers   : "cmd"
    } ) );

    FormatMenu.append( new MenuItem( {
        type : "separator"
    } ) );

    FormatMenu.append( new MenuItem( {
        label       : "Bold",
        click       : () => { },
        key         : "B",
        modifiers   : "cmd"
    } ) );

    FormatMenu.append( new MenuItem( {
        label       : "Italic",
        click       : () => { },
        key         : "I",
        modifiers   : "cmd"
    } ) );

    FormatMenu.append( new MenuItem( {
        type : "separator"
    } ) );

    FormatMenu.append( new MenuItem( {
        label       : "Link",
        click       : () => { },
        key         : "K",
        modifiers   : "cmd"
    } ) );

    FormatMenu.append( new MenuItem( {
        label       : "Image",
        click       : () => { },
        key         : "K",
        modifiers   : "cmd-alt"
    } ) );

    MainMenu.append( new MenuItem( { label : "Format", submenu : FormatMenu } ) );

    return FormatMenu;
};
