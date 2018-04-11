import {observable, action} from "mobx";
import QilinDarkTheme from "../../themes/qilin-theme-dark";

export default {
  @observable theme: QilinDarkTheme,

  @action loadTheme(theme) {
    this.theme = theme;
  },
};
