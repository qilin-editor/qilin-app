import { EventEmitter } from "events";
import { register }     from "../dispatchers/AppDispatcher";
import AppConstants     from "../constants/AppConstants";

export default class BaseStore extends EventEmitter {
    constructor() {
        super();

        this.dispatchToken = null;
    }

    subscribe( action ) {
        this.dispatchToken = register( action );
    }

    emitChange() {
        this.emit( AppConstants.CHANGE_EVENT );
    }

    addChangeListener( callback ) {
        this.addListener( AppConstants.CHANGE_EVENT, callback );
    }

    removeChangeListener( callback ) {
        this.removeListener( AppConstants.CHANGE_EVENT, callback );
    }
};
