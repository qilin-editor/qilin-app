import React, {Component} from "react";
import {inject, observer, PropTypes as MobxPropTypes} from "mobx-react";
import Editor from "qilin-components/editor";

@inject(["editorStore"])
@observer
class ContentEditable extends Component {
  static propTypes = {
    editorStore: MobxPropTypes.observableObject,
  }

  editorDidChange = (editor, data, value) => {
    this.props.editorStore.changeContent(value);
  }

  render() {
    return (
      <Editor
        value={this.props.editorStore.content}
        onBeforeChange={this.editorDidChange}
      />
    );
  }
}

export default ContentEditable;
