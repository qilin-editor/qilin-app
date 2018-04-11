import {observable, action, computed} from "mobx";
import QilinDarkTheme from "../../themes/qilin-theme-dark";

export default class ThemeStore {
  @observable styles = QilinDarkTheme;

  @action loadTheme(theme) {
    this.styles = theme;
  };

  @computed get colors() {
    const colors = {...this.styles};

    delete colors.title;
    delete colors.typography;

    return colors;
  };
};
