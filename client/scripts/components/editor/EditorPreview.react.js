import React, { Component } from "react";
import { observer }         from "mobx-react";
import Markdown             from "markdown-it";
import EditorStore          from "../../stores/EditorStore";

@observer
class EditorPreview extends Component {
    componentWillMount() {
        this.markdown = new Markdown( {
            html       : true,
            linkify    : true,
            typography : true,
        } );

        this.markdown.use( require( "markdown-it-sub" ) );
        this.markdown.use( require( "markdown-it-sup" ) );
        this.markdown.use( require( "markdown-it-abbr" ) );
        this.markdown.use( require( "markdown-it-emoji" ) );
        this.markdown.use( require( "markdown-it-anchor" ) );
        this.markdown.use( require( "markdown-it-task-lists" ) );
        this.markdown.use( require( "markdown-it-table-of-contents" ) );
        this.markdown.use( require( "markdown-it-block-embed" ), { filterUrl : url => `http://${url}` } );
        this.markdown.use( require( "../../plugins/markdown/latex" ) );
    }

    render() {
        return (
            <div
                className="editor-preview qilin-panel"
                dangerouslySetInnerHTML={{ __html : this.markdown.render( EditorStore.content ) }}
            />
        );
    }
}

export default EditorPreview;
