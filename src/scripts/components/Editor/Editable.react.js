import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import CodeMirrorComponent  from "react-codemirror";
import PropTypes            from "prop-types";

@inject( [ "editorStore" ] )
@observer
class EditorEditable extends Component {
    static propTypes = {
        editorStore : PropTypes.object
    }

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
        this.props.editorStore.changeContent( value );
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
