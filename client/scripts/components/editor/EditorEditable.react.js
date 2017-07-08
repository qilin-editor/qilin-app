import React, { Component } from "react";
import CodeMirrorComponent  from "react-codemirror";
import EditorStore          from "../../stores/EditorStore";
import { observer }         from "mobx-react";

require( "codemirror/mode/gfm/gfm" );
require( "codemirror/addon/edit/closebrackets" );
require( "codemirror/addon/scroll/scrollpastend" );
require( "codemirror/addon/scroll/simplescrollbars" );
require( "codemirror/addon/search/searchcursor" );
require( "codemirror/addon/search/search" );
require( "codemirror/addon/selection/active-line" );
require( "codemirror/addon/dialog/dialog" );
require( "codemirror/keymap/sublime" );
require( "markdown-it-asciimath/ASCIIMathTeXImg" );

@observer
class EditorEditable extends Component {
    state = {
        options : {
            mode  : "gfm",
            theme : "dark",

            styleActiveLine : true,
            lineNumbers     : false,
            lineWrapping    : true,

            autofocus      : true,
            scrollbarStyle : "overlay",
            scrollPastEnd  : true,

            tabSize        : 4,
            indentUnit     : 4,
            indentWithTabs : true,

            autoCloseBrackets : true,

            extraKeys : {
                "Alt-F" : "findPersistent",
            },
        },
    }

    editorDidChange = value => {
        EditorStore.changeContent( value );
    }

    render() {
        return (
            <div className="editor-editable qilin-panel">
                <CodeMirrorComponent
                    value={EditorStore.content}
                    options={this.state.options}
                    onChange={this.editorDidChange}
                />
            </div>
        );
    }
}

export default EditorEditable;
