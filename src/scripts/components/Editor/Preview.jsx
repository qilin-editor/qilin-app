import React, {Component} from "react";
import {inject, observer, PropTypes as MobxPropTypes} from "mobx-react";
import PropTypes from "prop-types";
import Markdown from "../TopLevel/Markdown";

@inject(["editorStore"])
@observer
class EditorPreview extends Component {
  static propTypes = {
    editorStore: MobxPropTypes.observableObject,
    isOpen: PropTypes.bool.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.isOpen === true;
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    return (
      <Markdown
        className="editor-preview qilin-panel typo"
        content={this.props.editorStore.content}
        isLazy
      />
    );
  }
}

export default EditorPreview;
