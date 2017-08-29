import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import PropTypes            from "prop-types";
import Markdown             from "markdown-it";

@inject( [ "editorStore" ] )
@observer
class EditorPreview extends Component {
    static propTypes = {
        editorStore : PropTypes.object
    }

    componentWillMount() {
        this.markdown = new Markdown( {
            html       : true,
            linkify    : true,
            typography : true
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
                className="editor-preview qilin-panel typo"
                dangerouslySetInnerHTML={{ __html : this.markdown.render( this.props.editorStore.content ) }}
            />
        );
    }
}

export default EditorPreview;
