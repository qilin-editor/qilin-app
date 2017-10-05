import React, { Component } from 'react';
import CodeMirror from '../../TopLevel/CodeMirror';
import PropTypes from 'prop-types';
import className from 'classnames';

class EditorForumlaEditor extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    change: PropTypes.func,
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    symbol: PropTypes.shape({
      type: PropTypes.string,
      content: PropTypes.string,
      alias: PropTypes.arrayOf(PropTypes.string),
      cache: PropTypes.number,
    }),
  }

  componentWillReceiveProps(props) {
    if (this.props.symbol.cache !== props.symbol.cache) {
      this.insertSymbol(props.symbol);
    }
  }

  insertSymbol = (symbol) => {
    const cursor = this.cm.getCursor();

    this.cm.replaceRange(symbol.content, {
      line: cursor.line,
      ch: cursor.ch,
    });
  }

  render() {
    const formulaClasses = className('editor-formula-editor', this.props.className);

    return (
      <div className={formulaClasses}>
        <CodeMirror
          api={(e) => { this.cm = e; }}
          options={{
            mode: 'plain/text',
            lineNumbers: true,
          }}
          content={this.props.value}
          onChange={this.props.change}
        />
      </div>
    );
  }
}

export default EditorForumlaEditor;
