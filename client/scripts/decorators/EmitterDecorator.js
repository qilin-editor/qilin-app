import EventEmitter from "events";

const globalEventEmitter = new EventEmitter();

export default target => {
    target.prototype.addGlobalEventListener = ( event, callback ) => {
        globalEventEmitter.addListener( event, callback );
    };

    target.prototype.removeGlobalEventListener = ( event, callback ) => {
        globalEventEmitter.removeListener( event, callback );
    };

    target.prototype.emitGlobalEvent = ( event, ...args ) => {
        globalEventEmitter.emit( event, ...args );
    };
};
