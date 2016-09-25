import { Dispatcher } from "flux";

export const dispatcher = new Dispatcher;

export function register( callback ) {
    dispatcher.register( callback );
}

export function waitFor( ids ) {
    dispatcher.waitFor( ids );
}

export function dispatch( type, action = {} ) {
    dispatcher.dispatch( { type, ...action } );
}
