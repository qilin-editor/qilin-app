import React, {Component} from "react";
import {inject, observer, PropTypes as MobxPropTypes} from "mobx-react";

@inject(["editorStore"])
@observer
class FileName extends Component {
  static propTypes = {
    editorStore: MobxPropTypes.observableObject,
  }

  reveal = () => {
    if (this.props.editorStore.path) {
      require("opn")(this.props.editorStore.directory);
    }
  }

  render() {
    const {filename, saved} = this.props.editorStore;
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
