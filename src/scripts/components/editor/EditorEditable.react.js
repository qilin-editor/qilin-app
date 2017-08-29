import React, { Component } from "react";
import { observer }         from "mobx-react";
import CodeMirrorComponent  from "react-codemirror";
import EditorStore          from "../../stores/EditorStore";

@observer
class EditorEditable extends Component {
    state = {
        options : {
            mode                : "gfm",
            theme               : "dark",

            styleActiveLine     : true,
            lineNumbers         : false,
            lineWrapping        : true,

            autofocus           : true,
            scrollbarStyle      : "overlay",
            scrollPastEnd       : true,

            tabSize             : 4,
            indentUnit          : 4,
            indentWithTabs      : true,
            autoCloseBrackets   : true,

            extraKeys : {
                "Alt-F" : "findPersistent"
            }
        }
    }

    editorDidChange = value => {
        EditorStore.changeContent( value );
    }

    render() {
        return (
            <div className="editor-editable qilin-panel">
                <CodeMirrorComponent
                    options={this.state.options}
                    value={EditorStore.content || ""}
                    onChange={this.editorDidChange}
                />
            </div>
        );
    }
}

export default EditorEditable;
