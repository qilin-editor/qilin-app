import React, { Component }             from "react";
import Draggable                        from "react-draggable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PropTypes                        from "prop-types";
import className                        from "classnames";
import FormulaHelp                      from "./EditorFormulaHelp.react";
import FormulaEditor                    from "./EditorFormulaEditor.react";
import FormulaPreview                   from "./EditorFormulaPreview.react";

class EditorForumla extends Component {
    static propTypes = {
        isOpen : PropTypes.bool.isRequired,
        close  : PropTypes.func.isRequired
    }

    state = {
        value  : "",
        symbol : {}
    }

    onClose = () => {
        this.props.close();
    }

    onDone = () => {
        this.setState( {
            value : ""
        } );

        this.props.close();
    }

    onChange = value => {
        this.setState( {
            value
        } );
    }

    onChoose = symbol => {
        this.setState( {
            symbol : {
                cache : +new Date,
                ...symbol
            }
        } );
    }

    render() {
        const popupClasses = className( "qilin-panel", "qilin-popup", {
            "is-open" : this.props.isOpen
        } );

        return (
            <Draggable handle=".qilin-popup-header">
                <div>
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
                                    value={"```math\n" + this.state.value + "\n```"}
                                />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default EditorForumla;
