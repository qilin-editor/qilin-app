import React, {Component} from "react";
import PropTypes from "prop-types";
import {inject, observer, PropTypes as MobxPropTypes} from "mobx-react";
import {Switch, Route, withRouter} from "react-router-dom";
import App from "qilin-components/app";
import Bar from "qilin-components/bar";
import Button from "qilin-components/form/button";
import Controls, {Control} from "qilin-components/control";
import Filename from "./Helpers/FileName";

@inject(["theme"])
@observer
@withRouter
class AppWindow extends Component {
  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    theme: MobxPropTypes.observableObject,
  }

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
      <App theme={this.props.theme.colors}>
        <Bar header>
          <Controls>
            <Control close onClick={this.closeWindow} />
            <Control minimize onClick={this.minimizeWindow} />
            <Control maximize onClick={this.maximizeWindow} />
          </Controls>

          <Filename />

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
