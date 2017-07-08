import { observable, action, computed } from "mobx";

class EditorStore {
    @observable path = "";
    @observable content = "";

    @action saveFile( path ) {
        this.path = path;
    }

    @action openFile( path, content ) {
        this.path = path;
        this.content = content;
    }

    @action changeContent( content ) {
        this.content = content;
    }
}

export default new EditorStore();
