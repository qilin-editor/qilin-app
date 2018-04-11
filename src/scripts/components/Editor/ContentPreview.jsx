import React, {Component} from "react";
import {inject, observer, PropTypes} from "mobx-react";
import Markdown from "../Helpers/Markdown";
import Typography from "../Helpers/Typography";

@inject(["editorStore"])
@observer
class ContentPreview extends Component {
  static propTypes = {
    editorStore: PropTypes.observableObject,
  }

  render() {
    return (
      <Typography>
        <Markdown
          className="typo"
          content={this.props.editorStore.content}
        />
      </Typography>
    );
  }
}

export default ContentPreview;
