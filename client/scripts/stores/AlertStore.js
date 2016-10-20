import BaseStore            from "./BaseStore";
import EditorConstants      from "../constants/EditorConstants";
import SketchConstants    from "../constants/SketchConstants";

const EXPIRED_DELAY = 3.5;

class AlertStore extends BaseStore {
    constructor() {
        super();

        this.info    = [];
        this.failure = [];
        this.success = [];

        this.initTimer();
        this.subscribe( action => {
            const currentDate = new Date;
            const expiredDate = currentDate.setSeconds( currentDate.getSeconds() + EXPIRED_DELAY );

            switch ( action.type ) {
                case SketchConstants.GEOMETRY_SAVE_FAILURE:
                case EditorConstants.EDITOR_AUTOSAVE_FILE_FAILURE:
                case EditorConstants.EDITOR_SAVE_FILE_FAILURE:
                case EditorConstants.EDITOR_OPEN_FILE_FAILURE:
                    this.failure.push( {
                        message : action.message,
                        created : currentDate,
                        expires : expiredDate,
                    } );

                    this.emitChange();
                    break;

                case SketchConstants.GEOMETRY_SAVE_SUCCESS:
                case EditorConstants.EDITOR_SAVE_FILE_SUCCESS:
                case EditorConstants.EDITOR_OPEN_FILE_SUCCESS:
                    this.success.push( {
                        message : action.message,
                        created : currentDate,
                        expires : expiredDate,
                    } );

                    this.emitChange();
                    break;

                case EditorConstants.EDITOR_AUTOSAVE_FILE_SUCCESS:
                    this.info.push( {
                        message : action.message,
                        created : currentDate,
                        expires : expiredDate,
                    } );

                    this.emitChange();
                    break;
            }
        } );
    }

    initTimer() {
        setInterval( () => {
            const isExpired = expire => new Date > expire;

            for ( const id in this.info ) {
                if ( isExpired( this.info[ id ].expires ) ) {
                    this.info.splice( id, 1 );
                    this.emitChange();
                }
            }

            for ( const id in this.failure ) {
                if ( isExpired( this.failure[ id ].expires ) ) {
                    this.failure.splice( id, 1 );
                    this.emitChange();
                }
            }

            for ( const id in this.success ) {
                if ( isExpired( this.success[ id ].expires ) ) {
                    this.success.splice( id, 1 );
                    this.emitChange();
                }
            }
        }, EXPIRED_DELAY * 1000 );
    }
}

export default new AlertStore();
