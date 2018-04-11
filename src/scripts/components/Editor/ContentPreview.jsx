import React, {Component} from "react";
import {inject, observer, PropTypes} from "mobx-react";
import Markdown from "../Helpers/Markdown";
import Typography from "../Helpers/Typography";

@inject(["editor"])
@observer
class ContentPreview extends Component {
  static propTypes = {
    editor: PropTypes.observableObject,
  }

  render() {
    return (
      <Typography>
        <Markdown
          className="typo"
          content={this.props.editor.content}
        />
      </Typography>
    );
  }
}

export default ContentPreview;
