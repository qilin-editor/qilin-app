import MarkdownConstants    from "../constants/MarkdownConstants";
import EditorConstants      from "../constants/EditorConstants";
import EditorActions        from "../actions/EditorActions";

export default MainMenu => {
    const { Menu, MenuItem } = nw;
    const FormatMenu         = new Menu();

    FormatMenu.append( new MenuItem( {
        label     : "Header 1",
        key       : "1",
        modifiers : "cmd",
        click     : () => { EditorActions.requestEditorShortcut( MarkdownConstants.MARKDOWN_HEADER_1 ) }
    } ) );

    FormatMenu.append( new MenuItem( {
        label     : "Header 2",
        key       : "2",
        modifiers : "cmd",
        click     : () => { EditorActions.requestEditorShortcut( MarkdownConstants.MARKDOWN_HEADER_2 ) }
    } ) );

    FormatMenu.append( new MenuItem( {
        label     : "Header 3",
        key       : "3",
        modifiers : "cmd",
        click     : () => { EditorActions.requestEditorShortcut( MarkdownConstants.MARKDOWN_HEADER_3 ) }
    } ) );

    FormatMenu.append( new MenuItem( {
        label     : "Header 4",
        key       : "4",
        modifiers : "cmd",
        click     : () => { EditorActions.requestEditorShortcut( MarkdownConstants.MARKDOWN_HEADER_4 ) }
    } ) );

    FormatMenu.append( new MenuItem( {
        label     : "Header 5",
        key       : "5",
        modifiers : "cmd",
        click     : () => { EditorActions.requestEditorShortcut( MarkdownConstants.MARKDOWN_HEADER_5 ) }
    } ) );

    FormatMenu.append( new MenuItem( {
        label     : "Header 6",
        key       : "6",
        modifiers : "cmd",
        click     : () => { EditorActions.requestEditorShortcut( MarkdownConstants.MARKDOWN_HEADER_6 ) }
    } ) );

    FormatMenu.append( new MenuItem( {
        type : "separator"
    } ) );

    FormatMenu.append( new MenuItem( {
        label     : "Bold",
        key       : "B",
        modifiers : "cmd",
        click     : () => { EditorActions.requestEditorShortcut( MarkdownConstants.MARKDOWN_BOLD ) }
    } ) );

    FormatMenu.append( new MenuItem( {
        label     : "Italic",
        key       : "I",
        modifiers : "cmd",
        click     : () => { EditorActions.requestEditorShortcut( MarkdownConstants.MARKDOWN_ITALIC ) }
    } ) );

    FormatMenu.append( new MenuItem( {
        type : "separator"
    } ) );

    FormatMenu.append( new MenuItem( {
        label     : "Link",
        key       : "K",
        modifiers : "cmd",
        click     : () => { EditorActions.requestEditorShortcut( MarkdownConstants.MARKDOWN_LINK ) }
    } ) );

    FormatMenu.append( new MenuItem( {
        label     : "Image",
        key       : "K",
        modifiers : "cmd-alt",
        click     : () => { EditorActions.requestEditorShortcut( MarkdownConstants.MARKDOWN_IMAGE ) }
    } ) );

    MainMenu.append( new MenuItem( { label : "Format", submenu : FormatMenu } ) );

    return FormatMenu;
};
