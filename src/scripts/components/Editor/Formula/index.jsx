import React, { Component } from "react";
import Rnd from "react-rnd";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PropTypes from "prop-types";
import FormulaHelp from "./Help";
import FormulaEditor from "./Editor";
import Makrdown from "../../TopLevel/Markdown";
import CodeMirror from "../../TopLevel/CodeMirror";

class EditorForumla extends Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        close: PropTypes.func.isRequired,
    }

    state = {
        value: "",
        symbol: {},
    }

    onClose = () => {
        this.props.close();
    }

    onDone = () => {
        this.setState({
            value: "",
        });

        this.props.close();
    }

    onChange = (value) => {
        this.setState({
            value,
        });
    }

    onChoose = (symbol) => {
        this.setState({
            symbol: {
                cache: +new Date(),
                ...symbol,
            },
        });
    }

    onDrag = (event) => {
        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        return (
            <Rnd
                dragHandleClassName=".qilin-popup-header"
                minWidth={300}
                minHeight={300}
                bounds="parent"
                style={{
                    position: "fixed",
                    top: "50px",
                    zIndex: 10,
                    display: this.props.isOpen ? "block" : "none",
                }}
                default={{
                    x: 0,
                    y: 80,
                    width: 500,
                    height: 400,
                }}
            >
                <div className="qilin-panel qilin-popup">
                    <div className="qilin-popup-header">
                        <div className="qilin-popup-header-title">Math forumla</div>

                        <div className="qilin-popup-header-close">
                            <button className="qilin-button is-big" onClick={this.onClose}>Close</button>
                        </div>

                        <div className="qilin-popup-header-done">
                            <button className="qilin-button is-big" onClick={this.onDone}>Done</button>
                        </div>
                    </div>

                    <Tabs className="qilin-popup-tabs">
                        <TabList className="qilin-popup-tabs-list">
                            <Tab className="qilin-popup-tabs-list-item">Editor</Tab>
                            <Tab className="qilin-popup-tabs-list-item">Output</Tab>
                        </TabList>

                        <TabPanel className="qilin-popup-content">
                            <Makrdown
                                className="formula-preview"
                                content={`\`\`\`katex\n${this.state.value}\n\`\`\``}
                            />

                            <FormulaEditor
                                change={this.onChange}
                                symbol={this.state.symbol}
                                value={this.state.value}
                            />

                            <FormulaHelp
                                choose={this.onChoose}
                            />
                        </TabPanel>

                        <TabPanel className="qilin-popup-content">
                            <CodeMirror
                                className="formula-editor is-full"
                                content={`\`\`\`katex\n${this.state.value}\n\`\`\``}
                                options={{
                                    scrollPastEnd: false,
                                    lineWrapping: false,
                                    lineNumbers: true,
                                    readOnly: true,
                                }}
                            />
                        </TabPanel>
                    </Tabs>
                </div>
            </Rnd>
        );
    }
}

export default EditorForumla;
