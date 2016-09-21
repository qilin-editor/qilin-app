import React, { Component } from "react";
import marked               from "marked";

import ShortcutActions      from "../../actions/ShortcutActions";
import EditorConstants      from "../../constants/EditorConstants";
import EditorActions        from "../../actions/EditorActions";
import EditorStore          from "../../stores/EditorStore";

export default class EditorPreview extends Component {
    state = {
        content : EditorStore.content
    }

    componentDidMount() {
        this.textDidMount();

        EditorStore.addChangeListener( this.textDidChange );
    }

    componentWillUnmount() {
        EditorStore.removeChangeListener( this.textDidChange );
    }

    textDidMount = () => {
        marked.setOptions( {
            breaks      : true,
            sanitize    : true,
            smartypants : true
        } );
    }

    textDidChange = () => {
        this.setState( {
            content : EditorStore.content
        } );
    }

    render() {
        return (
            <div className="editor-preview typeset" dangerouslySetInnerHTML={{ __html : marked( this.state.content || "" ) }} />
        );
    }
}
