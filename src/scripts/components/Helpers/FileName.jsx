import React, {Component} from "react";
import {inject, observer, PropTypes as MobxPropTypes} from "mobx-react";

@inject(["editor"])
@observer
class FileName extends Component {
  static propTypes = {
    editor: MobxPropTypes.observableObject,
  }

  reveal = () => {
    if (this.props.editor.path) {
      require("opn")(this.props.editor.directory);
    }
  }

  render() {
    const {filename, saved} = this.props.editor;
    const saveIndicator = filename ? (saved ? "" : "•") : "";

    return (
      <p className="filename" onClick={this.reveal}>
        <span>{`${filename || "Untitled"}`}</span>
        <span className="filename-indicator">{saveIndicator}</span>
      </p>
    );
  }
}

export default FileName;
