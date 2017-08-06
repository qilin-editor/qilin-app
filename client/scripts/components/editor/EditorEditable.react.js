import React, { Component } from "react";
import { observer }         from "mobx-react";
import CodeMirrorComponent  from "react-codemirror";
import CodeMirrorService    from "../../services/CodeMirrorService";
import MarkdownService      from "../../services/MarkdownService";
import EditorStore          from "../../stores/EditorStore";

@observer
class EditorEditable extends Component {
    componentWillReact() {
        this.cm.codeMirror.setValue( EditorStore.content );
    }

    editorDidChange = value => {
        EditorStore.changeContent( value );
    }

    render() {
        return (
            <div className="editor-editable qilin-panel">
                <CodeMirrorComponent
                    options={MarkdownService}
                    value={EditorStore.content}
                    onChange={this.editorDidChange}
                    ref={mirror => this.cm = mirror}
                />
            </div>
        );
    }
}

export default EditorEditable;
