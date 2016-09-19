import React, { Component } from "react";
import { findDOMNode }      from "react-dom";
import CodeMirrorComponent  from "react-codemirror";

require( "codemirror/mode/markdown/markdown" );
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
import EditorConstants      from "../../constants/EditorConstants";
import EditorActions        from "../../actions/EditorActions";
import EditorStore          from "../../stores/EditorStore";

@EmitterDecorator
class EditorEditable extends Component {
    state = {
        options : {
            mode                : "markdown",
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

    onChange = value => {
        EditorStore.content = value;
    }

    componentDidMount() {
        this.editorDidMount();

        EditorStore.addChangeListener( () => this.forceUpdate() );

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

    componentWillUnmount() {
        EditorStore.removeChangeListener( this.forceUpdate );
    }

    editorDidMount() {
        let CodeMirror = this.refs.editor.getCodeMirror();

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_BOLD, () => {
            const cursor = CodeMirror.getCursor();

            CodeMirror.replaceRange( "****", {
                line : cursor.line,
                ch   : cursor.ch
            } );

            CodeMirror.setCursor( {
                line : cursor.line,
                ch   : cursor.ch + 2
            } );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_ITALIC, () => {
            const cursor = CodeMirror.getCursor();

            CodeMirror.replaceRange( "**", {
                line : cursor.line,
                ch   : cursor.ch
            } );

            CodeMirror.setCursor( {
                line : cursor.line,
                ch   : cursor.ch + 1
            } );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_HEADER_1, () => {
            const cursor = CodeMirror.getCursor();

            CodeMirror.replaceRange( "# ", {
                line : cursor.line,
                ch   : cursor.ch
            } );

            CodeMirror.setCursor( {
                line : cursor.line,
                ch   : cursor.ch + 2
            } );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_HEADER_2, () => {
            const cursor = CodeMirror.getCursor();

            CodeMirror.replaceRange( "## ", {
                line : cursor.line,
                ch   : cursor.ch
            } );

            CodeMirror.setCursor( {
                line : cursor.line,
                ch   : cursor.ch + 3
            } );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_HEADER_3, () => {
            const cursor = CodeMirror.getCursor();

            CodeMirror.replaceRange( "### ", {
                line : cursor.line,
                ch   : cursor.ch
            } );

            CodeMirror.setCursor( {
                line : cursor.line,
                ch   : cursor.ch + 4
            } );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_HEADER_4, () => {
            const cursor = CodeMirror.getCursor();

            CodeMirror.replaceRange( "#### ", {
                line : cursor.line,
                ch   : cursor.ch
            } );

            CodeMirror.setCursor( {
                line : cursor.line,
                ch   : cursor.ch + 5
            } );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_HEADER_5, () => {
            const cursor = CodeMirror.getCursor();

            CodeMirror.replaceRange( "##### ", {
                line : cursor.line,
                ch   : cursor.ch
            } );

            CodeMirror.setCursor( {
                line : cursor.line,
                ch   : cursor.ch + 6
            } );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_HEADER_6, () => {
            const cursor = CodeMirror.getCursor();

            CodeMirror.replaceRange( "###### ", {
                line : cursor.line,
                ch   : cursor.ch
            } );

            CodeMirror.setCursor( {
                line : cursor.line,
                ch   : cursor.ch + 7
            } );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_LINK, () => {
            const cursor = CodeMirror.getCursor();

            CodeMirror.replaceRange( "[]()", {
                line : cursor.line,
                ch   : cursor.ch
            } );

            CodeMirror.setCursor( {
                line : cursor.line,
                ch   : cursor.ch + 1
            } );
        } );

        this.addGlobalEventListener( MarkdownConstants.MARKDOWN_IMAGE, () => {
            const cursor = CodeMirror.getCursor();

            CodeMirror.replaceRange( "![]()", {
                line : cursor.line,
                ch   : cursor.ch
            } );

            CodeMirror.setCursor( {
                line : cursor.line,
                ch   : cursor.ch + 2
            } );
        } );
    }

    render() {
        return (
            <div className="editor-container">
                <input className="is-hidden" ref="openFile" type="file" />
                <input className="is-hidden" ref="saveFile" type="file" />

                <CodeMirrorComponent
                    ref="editor"
                    value={EditorStore.content}
                    options={this.state.options}
                    onChange={this.onChange}
                />
            </div>
        );
    }
};

export default EditorEditable;
