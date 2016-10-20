import fs                   from "fs";
import path                 from "path";
import { dispatch }         from "../dispatchers/AppDispatcher";
import EmitterDecorator     from "../decorators/EmitterDecorator";

import SketchConstants    from "../constants/SketchConstants";
import EditorStore          from "../stores/EditorStore";

@EmitterDecorator
class SketchActions {
    requestSaveImage( name, snapshot, canvas ) {
        try {
            const image  = canvas.toDataURL( "image/png" );
            const base64 = image.replace( /^data:image\/png;base64,/, "" );

            if ( EditorStore.path === "" ) {
                dispatch( SketchConstants.GEOMETRY_SAVE_FAILURE, {
                    message : "Create a project before creating images",
                } );
            } else {
                const snapshotPath = path.join( path.dirname( EditorStore.path ), `${name}.json` );
                const imagePath    = path.join( path.dirname( EditorStore.path ), `${name}.png` );

                fs.writeFile( imagePath, base64, "base64", error => {
                    if ( error ) {
                        dispatch( SketchConstants.GEOMETRY_SAVE_FAILURE, {
                            message : error,
                        } );
                    } else {
                        dispatch( SketchConstants.GEOMETRY_SAVE_SUCCESS, {
                            message : `Image saved as ${name}`,
                        } );
                    }
                } );

                fs.writeFile( snapshotPath, snapshot, error => {
                    if ( error ) {
                        dispatch( SketchConstants.GEOMETRY_SAVE_FAILURE, {
                            message : error,
                        } );
                    } else {
                        dispatch( SketchConstants.GEOMETRY_SAVE_SUCCESS, {
                            message : `Snapshot saved as ${name}`,
                        } );
                    }
                } );
            }
        } catch ( error ) {
            dispatch( SketchConstants.GEOMETRY_SAVE_FAILURE, {
                message : "Could not save an empty image",
            } );
        }
    }

    handleSaveImage() {

    }
}

export default new SketchActions();
