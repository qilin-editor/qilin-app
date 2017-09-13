import React, { Component } from "react";
import Rnd from "react-rnd";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PropTypes from "prop-types";
import className from "classnames";
import FormulaHelp from "./Help";
import FormulaEditor from "./Editor";
import FormulaPreview from "./Preview";

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
        const popupClasses = className("qilin-panel", "qilin-popup", {
            "is-open": this.props.isOpen,
        });

        return (
            <div
                style={{
                    position: "absolute",
                    top: 50,
                    bottom: 50,
                    left: 0,
                    right: 0,
                }}
            >
                <Rnd
                    dragHandleClassName=".qilin-popup-header"
                    bounds="parent"
                    minWidth={300}
                    minHeight={300}
                    style={{
                        position: "absolute",
                        zIndex: 10,
                    }}
                    default={{
                        x: 0,
                        y: 80,
                        width: 500,
                        height: 400,
                    }}
                >
                    <div className={popupClasses}>
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
                                <FormulaPreview
                                    value={this.state.value}
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
                                <FormulaEditor
                                    className="is-full"
                                    value={`\`\`\`katex\n${this.state.value}\n\`\`\``}
                                />
                            </TabPanel>
                        </Tabs>
                    </div>
                </Rnd>
            </div>
        );
    }
}

export default EditorForumla;
