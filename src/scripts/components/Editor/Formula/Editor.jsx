import React, { Component } from "react";
import CodeMirrorComponent from "react-codemirror";
import PropTypes from "prop-types";
import className from "classnames";

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

    state = {
        options: {
            mode: "plain/text",
            theme: "dark",

            styleActiveLine: true,
            lineNumbers: true,
            lineWrapping: true,

            autofocus: true,
            scrollbarStyle: "overlay",

            tabSize: 4,
            indentUnit: 4,
            indentWithTabs: true,
            autoCloseBrackets: true,
        },
    }

    componentDidMount() {
        this.cm = this.rcm.getCodeMirror();
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
        const formulaClasses = className("formula-editor", this.props.className);

        return (
            <div className={formulaClasses}>
                <CodeMirrorComponent
                    ref={(e) => { this.rcm = e; }}
                    options={this.state.options}
                    value={this.props.value}
                    onChange={this.props.change}
                />
            </div>
        );
    }
}

export default EditorForumlaEditor;
