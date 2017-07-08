import React, { Component } from "react";
import Markdown             from "markdown-it";
import MarkdownSub          from "markdown-it-sub";
import MarkdownSup          from "markdown-it-sup";
import MarkdownAbbr         from "markdown-it-abbr";
import MarkdownEmoji        from "markdown-it-emoji";
import MarkdownAnchor       from "markdown-it-anchor";
import MarkdownMaths        from "markdown-it-asciimath";
import MarkdownTodos        from "markdown-it-task-lists";
import MarkdownVideo        from "markdown-it-block-embed";
import MarkdownTOC          from "markdown-it-table-of-contents";
import EditorStore          from "../../stores/EditorStore";

require( "markdown-it-asciimath/ASCIIMathTeXImg" );

export default class EditorPreview extends Component {
    state = {
        content : EditorStore.content,
    }

    componentWillMount() {
        this.markdown = new Markdown( {
            html       : true,
            linkify    : true,
            typography : true,
        } );

        this.markdown.use( MarkdownSub );
        this.markdown.use( MarkdownSup );
        this.markdown.use( MarkdownAbbr );
        this.markdown.use( MarkdownEmoji );
        this.markdown.use( MarkdownAnchor );
        this.markdown.use( MarkdownMaths );
        this.markdown.use( MarkdownTodos );
        this.markdown.use( MarkdownTOC );

        this.markdown.use( MarkdownVideo, {
            filterUrl : url => `http://${url}`,
        } );
    }

    componentDidMount() {
        EditorStore.addChangeListener( this.textDidChange );
    }

    componentWillUnmount() {
        EditorStore.removeChangeListener( this.textDidChange );
    }

    textDidChange = () => {
        this.setState( {
            content : EditorStore.content,
        } );
    }

    render() {
        return (
            <div
                className="editor-preview qilin-panel"
                dangerouslySetInnerHTML={{ __html : this.markdown.render( this.state.content ) }}
            />
        );
    }
}
