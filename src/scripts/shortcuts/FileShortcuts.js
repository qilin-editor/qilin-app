import fs           from "fs";
import shortcut     from "keymage";
import EditorStore  from "../stores/EditorStore";
import { click }    from "../utils/FileUtils";

function openFile( path ) {
    fs.readFile( path, "utf8", ( error, content ) => {
        if ( error ) {
            console.log( error );
        } else {
            EditorStore.changePath( path );
            EditorStore.changeContent( content );
            EditorStore.saved = true;
        }
    } );
}

function saveFile( path, content ) {
    fs.writeFile( path, content, error => {
        if ( error ) {
            console.log( error );
        } else {
            EditorStore.changePath( path );
            EditorStore.changeContent( content );
            EditorStore.saved = true;
        }
    } );
}

shortcut( "defmod-o", event => {
    event.preventDefault();
    event.stopPropagation();

    click( "#openFile", event => {
        openFile( event.target.value );
    } );

    return false;
} );

shortcut( "defmod-s", event => {
    event.preventDefault();
    event.stopPropagation();

    if ( EditorStore.path ) {
        saveFile( EditorStore.path, EditorStore.content );
    } else {
        click( "#saveFile", event => {
            saveFile( event.target.value, EditorStore.content );
        } );
    }

    return false;
} );

shortcut( "defmod-shift-s", event => {
    event.preventDefault();
    event.stopPropagation();

    click( "#saveFile", event => {
        saveFile( event.target.value, EditorStore.content );
    } );

    return false;
} );
