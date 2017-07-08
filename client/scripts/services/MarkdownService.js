require( "markdown-it-asciimath/ASCIIMathTeXImg" );

export default {
    mode                : "gfm",
    theme               : "dark",

    styleActiveLine     : true,
    lineNumbers         : false,
    lineWrapping        : true,

    autofocus           : true,
    scrollbarStyle      : "overlay",
    scrollPastEnd       : true,

    tabSize             : 4,
    indentUnit          : 4,
    indentWithTabs      : true,
    autoCloseBrackets   : true,

    extraKeys : {
        "Alt-F" : "findPersistent"
    }
};
