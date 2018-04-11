import React, {Component} from "react";
import {inject, observer, PropTypes as MobxPropTypes} from "mobx-react";
import Editor from "qilin-components/editor";

@inject(["editor"])
@observer
class ContentEditable extends Component {
  static propTypes = {
    editor: MobxPropTypes.observableObject,
  }

  editorDidChange = (editor, data, value) => {
    this.props.editor.changeContent(value);
  }

  render() {
    return (
      <Editor
        value={this.props.editor.content}
        onBeforeChange={this.editorDidChange}
      />
    );
  }
}

export default ContentEditable;
