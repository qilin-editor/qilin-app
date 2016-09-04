import React, { Component } from "react";
import CodeMirrorComponent  from "react-codemirror";
import CodeMirror           from "codemirror";

require( "codemirror/mode/markdown/markdown" );

require( "codemirror/addon/edit/closebrackets" )

require( "codemirror/addon/scroll/simplescrollbars" );

require( "codemirror/addon/search/searchcursor" );
require( "codemirror/addon/search/search" );

require( "codemirror/addon/selection/active-line" );

require( "codemirror/addon/dialog/dialog" );

require( "codemirror/keymap/sublime" );

export default class EditorEditable extends Component {
    state = {
        content : "Hello world!",
        options : {
            mode    : "markdown",
            theme   : "dark",

            styleActiveLine : true,
            lineNumbers     : false,
            lineWrapping    : true,
            autofocus: true,
            scrollbarStyle: 'overlay',

            tabSize         : 4,
            indentUnit      : 4,
            indentWithTabs  : true,

            foldGutter      : false,

            autoCloseBrackets : true,

            extraKeys: {"Alt-F": "findPersistent"}
        }
    }

    onChange = value => {
        this.setState( {
            content : value
        } );
    }

    render() {
        return (
            <div className="editor-container">
                <CodeMirrorComponent
                    value={this.state.content}
                    options={this.state.options}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}
