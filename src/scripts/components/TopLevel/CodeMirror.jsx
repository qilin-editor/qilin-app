import React, { PureComponent } from 'react';
import CodeMirrorComponent from 'react-codemirror2';
import className from 'classnames';
import PropTypes from 'prop-types';

import 'codemirror/mode/gfm/gfm';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/scroll/scrollpastend';
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/selection/active-line';
import 'codemirror/keymap/sublime';

class CodeMirror extends PureComponent {
  static propTypes = {
    options: PropTypes.objectOf(PropTypes.any),
    content: PropTypes.string,
    onMount: PropTypes.func,
    onChange: PropTypes.func,
    className: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
  }

  static defaultOptions = {
    mode: 'gfm',
    theme: 'dark',
    autofocus: true,
    lineNumbers: false,
    lineWrapping: true,
    styleActiveLine: true,
    scrollbarStyle: 'overlay',
    scrollPastEnd: true,
    indentUnit: 4,
    autoCloseBrackets: true,
    keyMap: 'sublime',
  }

  static defaultProps = {
    options: {},
    content: '',
  }

  state = {
    options: CodeMirror.defaultOptions,
  }

  componentWillMount() {
    this.updateOptions(this.props.options);
  }

  componentWillReceiveProps(nextProps) {
    this.updateOptions(nextProps.options);
  }

  onChange = (editor, metadata, value) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  updateOptions = (options = {}) => {
    this.setState({
      options: {
        ...CodeMirror.defaultOptions,
        ...this.state.options,
        ...options,
      },
    });
  }

  render() {
    return (
      <CodeMirrorComponent
        className={className(this.props.className)}
        options={this.state.options}
        value={this.props.content}
        onChange={this.onChange}
        editorDidMount={this.props.onMount}
      />
    );
  }
}

export default CodeMirror;
