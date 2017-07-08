import path                             from "path";
import { observable, action, computed } from "mobx";

class EditorStore {
    @observable path    = "";
    @observable content = "";

    @action saveFile( path ) {
        this.path = path;
    }

    @action openFile( path, content ) {
        this.path    = path;
        this.content = content;
    }

    @action changeContent( content ) {
        this.content = content;
    }

    @computed get filename() {
        return this.path !== "" ? path.basename( this.path ) : "Untitled";
    }

    @computed get directory() {
        return path.dirname( this.path );
    }
}

export default new EditorStore();
