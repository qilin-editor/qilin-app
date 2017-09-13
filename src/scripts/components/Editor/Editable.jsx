import React, { Component } from "react";
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";
import CodeMirrorComponent from "react-codemirror";

@inject(["editorStore"])
@observer
class EditorEditable extends Component {
    static propTypes = {
        editorStore: MobxPropTypes.observableObject,
    }

    state = {
        options: {
            mode: "gfm",
            theme: "dark",
            autofocus: true,
            lineNumbers: false,
            lineWrapping: true,
            styleActiveLine: true,
            scrollbarStyle: "overlay",
            scrollPastEnd: true,
            indentUnit: 4,
            autoCloseBrackets: true,
            keyMap: "sublime",
        },
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.editorStore.content !== this.props.editorStore.content;
    }

    editorDidChange = (value) => {
        this.props.editorStore.changeContent(value);
    }

    render() {
        return (
            <div className="editor-editable qilin-panel">
                <CodeMirrorComponent
                    options={this.state.options}
                    value={this.props.editorStore.content}
                    onChange={this.editorDidChange}
                />
            </div>
        );
    }
}

export default EditorEditable;
