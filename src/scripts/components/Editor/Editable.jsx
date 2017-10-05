import React, { Component } from 'react';
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react';
import CodeMirror from '../TopLevel/CodeMirror';

@inject(['editorStore'])
@observer
class EditorEditable extends Component {
  static propTypes = {
    editorStore: MobxPropTypes.observableObject,
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.editorStore.content !== this.props.editorStore.content;
  }

  editorDidChange = (value) => {
    this.props.editorStore.changeContent(value);
  }

  render() {
    return (
      <div className="editor-editable qilin-panel">
        <CodeMirror
          content={this.props.editorStore.content}
          onChange={this.editorDidChange}
        />
      </div>
    );
  }
}

export default EditorEditable;
