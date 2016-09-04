import React, { Component } from "react";
import { findDOMNode }      from "react-dom";
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

import EmitterDecorator from "../../decorators/EmitterDecorator";

import EditorConstants  from "../../constants/EditorConstants";
import EditorActions    from "../../actions/EditorActions";
import EditorStore      from "../../stores/EditorStore";

@EmitterDecorator
class EditorEditable extends Component {
    state = {
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
        EditorStore.content = value;
    }

    componentDidMount() {
        // Add non-standard attributes on input:
        findDOMNode( this.refs.saveFile ).setAttribute( "nwsaveas", "qilin.md" );

        this.addGlobalEventListener( EditorConstants.EDITOR_OPEN_FILE_REQUEST, () => {
            this.refs.openFile.addEventListener( "change", event => EditorActions.handleOpenFile( event.target.value ), false );
            this.refs.openFile.click();
        } );

        this.addGlobalEventListener( EditorConstants.EDITOR_SAVE_FILE_REQUEST, () => {
            this.refs.saveFile.addEventListener( "change", event => EditorActions.handleSaveFile( event.target.value ), false );
            this.refs.saveFile.click();
        } );
    }

    render() {
        return (
            <div className="editor-container">
                <input className="is-hidden" ref="openFile" type="file" />
                <input className="is-hidden" ref="saveFile" type="file" />

                <CodeMirrorComponent
                    value={EditorStore.content}
                    options={this.state.options}
                    onChange={this.onChange}
                />
            </div>
        );
    }
};

export default EditorEditable;
