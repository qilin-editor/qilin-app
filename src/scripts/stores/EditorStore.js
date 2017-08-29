import path                             from "path";
import { observable, action, computed } from "mobx";

export default {
    @observable path    : "",
    @observable content : "",
    @observable saved   : false,

    @action changePath( path ) {
        this.path = path;
    },

    @action changeContent( content ) {
        this.content = content;
        this.saved   = false;
    },

    @computed get filename() {
        return this.path ? path.basename( this.path ) : "";
    },

    @computed get directory() {
        return path.dirname( this.path );
    }
};
