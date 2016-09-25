import BaseStore       from "./BaseStore";
import EditorConstants from "../constants/EditorConstants";

class AlertStore extends BaseStore {
    constructor() {
        super();

        this.info    = [];
        this.failure = [];
        this.success = [];

        this.initTimer();
        this.subscribe( action => {
            const currentDate = new Date;
            const expiredDate = currentDate.setSeconds( currentDate.getSeconds() + 5 );

            switch ( action.type ) {
                case EditorConstants.EDITOR_SAVE_FILE_FAILURE:
                case EditorConstants.EDITOR_OPEN_FILE_FAILURE:
                    // console.error( `Editor error - ${action.path}` );
                    // console.error( action.message );

                    this.failure.push( {
                        message : action.message,
                        created : currentDate,
                        expires : expiredDate,
                    } );

                    this.emitChange();
                    break;

                case EditorConstants.EDITOR_SAVE_FILE_SUCCESS:
                case EditorConstants.EDITOR_OPEN_FILE_SUCCESS:
                    // console.info( `Editor success - ${action.path}\n` );
                    // console.info( action.message );

                    this.success.push( {
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
        }, 5000 );
    }
}

export default new AlertStore();
