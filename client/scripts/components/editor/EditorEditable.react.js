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

import EmitterDecorator from "../../decorators/EmitterDecorator";

import EditorConstants  from "../../constants/EditorConstants";
import EditorActions    from "../../actions/EditorActions";
import EditorStore      from "../../stores/EditorStore";

@EmitterDecorator
class EditorEditable extends Component {
    state = {
        path    : null,
        error   : null,
        content : null,

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

    componentDidMount() {
        EditorStore.addChangeListener( () => this.onEditorChange() );

        this.addGlobalEventListener( EditorConstants.EDITOR_OPEN_FILE_REQUEST, () => {
            this.refs.openFile.addEventListener( "change", event => EditorActions.handleOpenFile( event.target.value ), false );
            this.refs.openFile.click();
        } );
    }

    componentWillUnmount() {
        EditorStore.removeChangeListener( this.onEditorChange );
    }

    onEditorChange() {
        this.setState( {
            path    : EditorStore.path,
            error   : EditorStore.error,
            content : EditorStore.content
        } );
    }

    render() {
        return (
            <div className="editor-container">
                <input className="is-hidden" ref="openFile" type="file" />

                <CodeMirrorComponent
                    value={this.state.content}
                    options={this.state.options}
                    onChange={this.onChange}
                />
            </div>
        );
    }
};

export default EditorEditable;
