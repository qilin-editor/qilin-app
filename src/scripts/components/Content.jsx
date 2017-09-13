import React, { Component } from "react";
import PropTypes from "prop-types";
import className from "classnames";
import SplitPane from "react-split-pane";
import EditorEditable from "./Editor/Editable";
import EditorPreview from "./Editor/Preview";
import EditorForumlaPopup from "./Editor/Formula/Popup";

class Content extends Component {
    static propTypes = {
        toggleFormula: PropTypes.func.isRequired,
        isPreviewToggled: PropTypes.bool.isRequired,
        isFormulaToggled: PropTypes.bool.isRequired,
    }

    render() {
        const splitPaneClasses = className("app-content-pane", {
            "is-preview-hidden": !this.props.isPreviewToggled,
        });

        return (
            <div className="app-content qilin-panel">
                <div className="app-content-main qilin-panel">
                    <SplitPane
                        split="vertical"
                        minSize={300}
                        maxSize={-300}
                        defaultSize="50%"
                        className={splitPaneClasses}
                    >
                        <EditorEditable />
                        <EditorPreview />
                    </SplitPane>

                    <EditorForumlaPopup
                        isOpen={this.props.isFormulaToggled}
                        close={this.props.toggleFormula}
                    />
                </div>
            </div>
        );
    }
}

export default Content;
