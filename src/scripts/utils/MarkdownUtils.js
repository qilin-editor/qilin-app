import Markdown from "markdown-it";

export function getMarkdown( options = {} ) {
    const markdown = new Markdown( {
        html       : true,
        linkify    : true,
        typography : true,
        ...options
    } );

    markdown.use( require( "markdown-it-sub" ) );
    markdown.use( require( "markdown-it-sup" ) );
    markdown.use( require( "markdown-it-abbr" ) );
    markdown.use( require( "markdown-it-emoji" ) );
    markdown.use( require( "markdown-it-anchor" ) );
    markdown.use( require( "markdown-it-task-lists" ) );
    markdown.use( require( "markdown-it-table-of-contents" ) );
    markdown.use( require( "markdown-it-block-embed" ), { filterUrl : url => `http://${url}` } );
    markdown.use( require( "../plugins/markdown/latex" ) );

    return markdown;
}
