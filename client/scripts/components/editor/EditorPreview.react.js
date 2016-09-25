import React, { Component } from "react";
import Markdown             from "markdown-it";
import MarkdownEmoji        from "markdown-it-emoji";
import MarkdownMaths        from "markdown-it-asciimath";
import MarkdownAnchor       from "markdown-it-anchor";
import MarkdownTOC          from "markdown-it-table-of-contents";
import EditorStore          from "../../stores/EditorStore";

require( "markdown-it-asciimath/ASCIIMathTeXImg" );

export default class EditorPreview extends Component {
    state = {
        markdown : new Markdown,
        content  : EditorStore.content,
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
        this.state.markdown.use( MarkdownAnchor );
        this.state.markdown.use( MarkdownTOC );
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
