import React, { Component } from "react";
import { findDOMNode }      from "react-dom";
import CodeMirrorComponent  from "react-codemirror";

require( "codemirror/mode/gfm/gfm" );
require( "codemirror/addon/edit/closebrackets" )
require( "codemirror/addon/scroll/scrollpastend" );
require( "codemirror/addon/scroll/simplescrollbars" );
require( "codemirror/addon/search/searchcursor" );
require( "codemirror/addon/search/search" );
require( "codemirror/addon/selection/active-line" );
require( "codemirror/addon/dialog/dialog" );
require( "codemirror/keymap/sublime" );

import EmitterDecorator     from "../../decorators/EmitterDecorator";
import MarkdownConstants    from "../../constants/MarkdownConstants";
import ShortcutActions      from "../../actions/ShortcutActions";
import EditorConstants      from "../../constants/EditorConstants";
import EditorActions        from "../../actions/EditorActions";
import EditorStore          from "../../stores/EditorStore";

@EmitterDecorator
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
                "Alt-F" : "findPersistent",
            }
        }
    }

    componentDidMount() {
        this.editorDidMount();
        this.finderDidMount();

        EditorStore.addChangeListener( () => this.forceUpdate() );
    }

    componentWillUnmount() {
        EditorStore.removeChangeListener( this.forceUpdate );
    }

    editorDidMount() {
        let CodeMirror = this.refs.editor.getCodeMirror();

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_BOLD, () => {
            ShortcutActions.requestBold( CodeMirror );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_ITALIC, () => {
            ShortcutActions.requestItalic( CodeMirror );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_STRIKETHROUGH, () => {
            ShortcutActions.requestStrikethrought( CodeMirror );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_HEADER_1, () => {
            ShortcutActions.requestHeader1( CodeMirror );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_HEADER_2, () => {
            ShortcutActions.requestHeader2( CodeMirror );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_HEADER_3, () => {
            ShortcutActions.requestHeader3( CodeMirror );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_HEADER_4, () => {
            ShortcutActions.requestHeader4( CodeMirror );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_HEADER_5, () => {
            ShortcutActions.requestHeader5( CodeMirror );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_HEADER_6, () => {
            ShortcutActions.requestHeader6( CodeMirror );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_LINK, () => {
            ShortcutActions.requestLink( CodeMirror );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_IMAGE, () => {
            ShortcutActions.requestImage( CodeMirror );
        } );
    }

    editorDidChange = value => {
        EditorActions.requestContentChange( value );
    }

    finderDidMount() {
        // Add non-standard attributes on input:
        findDOMNode( this.refs.saveFile ).setAttribute( "nwsaveas", "qilin.md" );

        this.refs.openFile.addEventListener( "change", event => {
            EditorActions.handleOpenFile( event.target.value );
            event.target.value = "";
        }, false );

        this.refs.saveFile.addEventListener( "change", event => {
            EditorActions.handleSaveFile( event.target.value );
            event.target.value = "";
        }, false );

        this.addGlobalEventListener( EditorConstants.EDITOR_OPEN_FILE_REQUEST, () => {
            this.refs.openFile.click();
        } );

        this.addGlobalEventListener( EditorConstants.EDITOR_SAVE_FILE_REQUEST, () => {
            this.refs.saveFile.click();
        } );
    }

    render() {
        return (
            <div className="editor-editable">
                <input className="is-hidden" ref="openFile" type="file" />
                <input className="is-hidden" ref="saveFile" type="file" />

                <CodeMirrorComponent
                    ref="editor"
                    value={EditorStore.content}
                    options={this.state.options}
                    onChange={this.editorDidChange}
                />
            </div>
        );
    }
};

export default EditorEditable;
