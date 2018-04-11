import path from "path";
import {observable, action, computed} from "mobx";

export default class EditorStore {
  @observable path = "";
  @observable content = "";
  @observable saved = false;

  @action changePath(newPath) {
    this.path = newPath;
  };

  @action changeContent(newContent) {
    this.content = newContent;
    this.saved = false;
  };

  @computed get filename() {
    return this.path ? path.basename(this.path) : null;
  };

  @computed get directory() {
    return path.dirname(this.path);
  };
};
