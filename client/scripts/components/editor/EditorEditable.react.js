import React, { Component } from "react";
import CodeMirrorComponent  from "react-codemirror";
import CodeMirrorService    from "../../services/CodeMirrorService";
import MarkdownService      from "../../services/MarkdownService";
import EditorStore          from "../../stores/EditorStore";
import { observer }         from "mobx-react";

@observer
class EditorEditable extends Component {
    editorDidChange = value => {
        EditorStore.changeContent( value );
    }

    render() {
        return (
            <div className="editor-editable qilin-panel">
                <CodeMirrorComponent
                    value={EditorStore.content}
                    options={MarkdownService}
                    onChange={this.editorDidChange}
                />
            </div>
        );
    }
}

export default EditorEditable;
