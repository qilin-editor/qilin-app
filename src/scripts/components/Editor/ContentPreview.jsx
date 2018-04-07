import React, {Component} from "react";
import {inject, observer, PropTypes} from "mobx-react";
import Markdown from "../Helpers/Markdown";

@inject(["editorStore"])
@observer
class ContentPreview extends Component {
  static propTypes = {
    editorStore: PropTypes.observableObject,
  }

  render() {
    return (
      <Markdown
        className="typo"
        content={this.props.editorStore.content}
      />
    );
  }
}

export default ContentPreview;
