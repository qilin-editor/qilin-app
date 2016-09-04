import BaseStore       from "./BaseStore";
import EditorConstants from "../constants/EditorConstants";

class EditorStore extends BaseStore {
    constructor() {
        super();

        this.path    = null;
        this.error   = null;
        this.content = null;

        this.subscribe( action => {
            switch ( action.type ) {
                case EditorConstants.EDITOR_OPEN_FILE_SUCCESS:
                    console.info( `File ${action.path} opened` );

                    this.path       = action.path;
                    this.error      = null;
                    this.content    = action.content;

                    this.emitChange();
                    break;

                case EditorConstants.EDITOR_OPEN_FILE_FAILURE:
                    console.error( `Could not open file ${action.path}!` );

                    this.path       = action.path;
                    this.error      = action.error;
                    this.content    = null;

                    this.emitChange();
                    break;
            }
        } );
    }
};

export default new EditorStore();
