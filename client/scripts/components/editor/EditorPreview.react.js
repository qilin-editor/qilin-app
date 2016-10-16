import React, { Component } from "react";
import Markdown             from "markdown-it";
import MarkdownAbbr         from "markdown-it-abbr";
import MarkdownEmoji        from "markdown-it-emoji";
import MarkdownMaths        from "markdown-it-asciimath";
import MarkdownTodos        from "markdown-it-task-lists";
import MarkdownVideo        from "markdown-it-block-embed";
import MarkdownAnchor       from "markdown-it-anchor";
import MarkdownTOC          from "markdown-it-table-of-contents";
import EditorStore          from "../../stores/EditorStore";

require( "markdown-it-asciimath/ASCIIMathTeXImg" );

export default class EditorPreview extends Component {
    state = {
        content  : EditorStore.content,
        markdown : new Markdown( {
            html       : true,
            linkify    : true,
            typography : true,
        } ),
    }

    componentDidMount() {
        this.textDidMount();

        EditorStore.addChangeListener( this.textDidChange );
    }

    componentWillUnmount() {
        EditorStore.removeChangeListener( this.textDidChange );
    }

    textDidMount = () => {
        this.state.markdown.use( MarkdownEmoji );
        this.state.markdown.use( MarkdownMaths );
        this.state.markdown.use( MarkdownTodos );
        this.state.markdown.use( MarkdownAnchor );
        this.state.markdown.use( MarkdownAbbr );
        this.state.markdown.use( MarkdownTOC );

        this.state.markdown.use( MarkdownVideo, {
            filterUrl : url => `http://${url}`,
        } );
    }

    textDidChange = () => {
        this.setState( {
            content : EditorStore.content,
        } );
    }

    render() {
        return (
            <div className="editor-preview qilin-panel" dangerouslySetInnerHTML={{ __html : this.state.markdown.render( this.state.content ) }} />
        );
    }
}
