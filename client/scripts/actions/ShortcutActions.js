class ShortcutActions {
    requestBold( CodeMirror ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "****", {
            line : cursor.line,
            ch   : cursor.ch,
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 2,
        } );
    }

    requestItalic( CodeMirror ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "**", {
            line : cursor.line,
            ch   : cursor.ch,
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 1,
        } );
    }

    requestStrikethrought( CodeMirror ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "~~~~", {
            line : cursor.line,
            ch   : cursor.ch,
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 2,
        } );
    }

    requestHeader1( CodeMirror ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "# ", {
            line : cursor.line,
            ch   : cursor.ch,
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 2,
        } );
    }

    requestHeader2( CodeMirror ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "## ", {
            line : cursor.line,
            ch   : cursor.ch,
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 3,
        } );
    }

    requestHeader3( CodeMirror ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "### ", {
            line : cursor.line,
            ch   : cursor.ch,
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 4,
        } );
    }

    requestHeader4( CodeMirror ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "#### ", {
            line : cursor.line,
            ch   : cursor.ch,
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 5,
        } );
    }

    requestHeader5( CodeMirror ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "##### ", {
            line : cursor.line,
            ch   : cursor.ch,
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 6,
        } );
    }

    requestHeader6( CodeMirror ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "###### ", {
            line : cursor.line,
            ch   : cursor.ch,
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 7,
        } );
    }

    requestLink( CodeMirror ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "[]()", {
            line : cursor.line,
            ch   : cursor.ch,
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 1,
        } );
    }

    requestImage( CodeMirror ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "![]()", {
            line : cursor.line,
            ch   : cursor.ch,
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 2,
        } );
    }

    requestAbbreviation( CodeMirror ) {
        const cursor = CodeMirror.getCursor();

        CodeMirror.replaceRange( "*[]: ", {
            line : cursor.line,
            ch   : cursor.ch,
        } );

        CodeMirror.setCursor( {
            line : cursor.line,
            ch   : cursor.ch + 2,
        } );
    }
}

export default new ShortcutActions();
