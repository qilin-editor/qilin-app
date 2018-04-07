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
    const saveIndicator = filename && saved ? "" : "*";

    return (
      <span className="filename" onClick={this.reveal}>
        {`${filename || "Untitled"}${saveIndicator}`}
      </span>
    );
  }
}

export default FileName;
