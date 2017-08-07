import { observable, action, computed } from "mobx";

class AlertStore {
    @observable info = [];
    @observable failure = [];
    @observable success = [];
}

export default new AlertStore();
