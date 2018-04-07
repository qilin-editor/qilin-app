import React, {PureComponent} from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import App from "qilin-components/app";
import Bar from "qilin-components/bar";
import Button from "qilin-components/form/button";
import Controls, {Control} from "qilin-components/control";

const syntax = {
  import: "#e696f9",
  snippet: "#f5f4f5",
  comment: "#6b6b8a",
  variable: "#f77ea5",
  constant: "#f77ea5",
  property: "#ffe25b",
  function: "#6cc1fa",
  attribute: "#ffe25b",
  value: "#f5f4f5",
  class: "#e696f9",
  method: "#6cc1fa",
  keyword: "#e696f9",
  tag: "#e696f9",
};

const theme = {
  foreground: "#9998b9",
  background: "#272740",
  border: "#171727",
  caret: "#f97fa7",
  lineHighlight: "#2b2b48",
  findHighlight: "#00ff00",
  findHighlightForeground: "#0000ff",
  gutter: "#272740",
  gutterForeground: "#4c4b66",
  selection: "#3a3960",
  selectionBorder: "#3a3960",
  selectionForeground: "#9998b9",
  inactiveSelection: "#3a3960",
  inactiveSelectionForeground: "#9998b9",
  shadow: "#111111",
  syntax: syntax,
};

@withRouter
class AppWindow extends PureComponent {
  closeWindow = () => {
    this.window.close(true);
  }

  minimizeWindow = () => {
    this.window.minimize();
  }

  maximizeWindow = () => {
    this.window.toggleFullscreen();
  }

  toggleSettings = () => {
    const {location, history} = this.props;

    if (location.pathname.includes("settings")) {
      history.push("/");
    } else {
      history.push("/settings");
    }
  }

  render() {
    return (
      <App theme={theme}>
        <Bar header>
          <Controls>
            <Control close onClick={this.closeWindow} />
            <Control minimize onClick={this.minimizeWindow} />
            <Control maximize onClick={this.maximizeWindow} />
          </Controls>

          <p>Filename</p>

          <section>
            <Button onClick={this.toggleSettings}>C</Button>
          </section>
        </Bar>

        <Switch>
          <Route path="/" exact component={require("./Editor")} />
          <Route path="/settings" component={require("./Settings")} />
        </Switch>

        <Bar footer>
          …
        </Bar>
      </App>
    );
  }
}

export default AppWindow;
