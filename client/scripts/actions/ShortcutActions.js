class ShortcutActions {
    requestBold( CodeEditor ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "****", {
            line : cursor.line,
            ch   : cursor.ch
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 2
        } );
    }

    requestItalic( CodeEditor ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "**", {
            line : cursor.line,
            ch   : cursor.ch
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 1
        } );
    }

    requestStrikethrought( CodeEditor ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "~~~~", {
            line : cursor.line,
            ch   : cursor.ch
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 2
        } );
    }

    requestHeader1( CodeEditor ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "# ", {
            line : cursor.line,
            ch   : cursor.ch
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 2
        } );
    }

    requestHeader2( CodeEditor ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "## ", {
            line : cursor.line,
            ch   : cursor.ch
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 3
        } );
    }

    requestHeader3( CodeEditor ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "### ", {
            line : cursor.line,
            ch   : cursor.ch
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 4
        } );
    }

    requestHeader4( CodeEditor ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "#### ", {
            line : cursor.line,
            ch   : cursor.ch
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 5
        } );
    }

    requestHeader5( CodeEditor ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "##### ", {
            line : cursor.line,
            ch   : cursor.ch
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 6
        } );
    }

    requestHeader6( CodeEditor ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "###### ", {
            line : cursor.line,
            ch   : cursor.ch
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 7
        } );
    }

    requestLink( CodeEditor ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "[]()", {
            line : cursor.line,
            ch   : cursor.ch
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 1
        } );
    }

    requestImage( CodeEditor ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "![]()", {
            line : cursor.line,
            ch   : cursor.ch
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 2
        } );
    }
};

export default new ShortcutActions();
