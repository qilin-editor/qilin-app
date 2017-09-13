import ThemeIcon from "../../images/icons/menu/theme.svg";
import PreviewIcon from "../../images/icons/menu/preview.svg";
import FormulaIcon from "../../images/icons/menu/formula.svg";
import React, { Component } from "react";
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";
import className from "classnames";
import PropTypes from "prop-types";
import ReactSVG from "react-svg";
import Controls from "./Control/Wrapper";

@inject(["editorStore"])
@observer
class Header extends Component {
    static propTypes = {
        editorStore: MobxPropTypes.observableObject,
        toggleTheme: PropTypes.func.isRequired,
        togglePreview: PropTypes.func.isRequired,
        toggleFormula: PropTypes.func.isRequired,
        isThemeToggled: PropTypes.bool.isRequired,
        isPreviewToggled: PropTypes.bool.isRequired,
        isFormulaToggled: PropTypes.bool.isRequired,
    }

    revealFolder = () => {
        if (this.props.editorStore.path) {
            require("opn")(this.props.editorStore.directory);
        }
    }

    renderFilename = () => {
        const { filename, saved } = this.props.editorStore;
        const saveIndicator = filename && saved ? "" : "*";

        return (
            <span>{`${filename || "Untitled"}${saveIndicator}`}</span>
        );
    }

    render() {
        const themeIcon = className("qilin-button-icon", {
            "is-active": this.props.isThemeToggled,
        });

        const forumlaIcon = className("qilin-button-icon", {
            "is-active": this.props.isFormulaToggled,
        });

        const previewIcon = className("qilin-button-icon", {
            "is-active": this.props.isPreviewToggled,
        });

        const titleClasses = className("app-header-title", {
            "is-clickable": this.props.editorStore.path,
        });

        return (
            <div className="app-header qilin-panel">
                <Controls />

                <div className={titleClasses} onClick={this.revealFolder} role="link" tabIndex={0}>
                    {this.renderFilename()}
                </div>

                <div className="app-header-buttons">
                    <button className="qilin-button" onClick={this.props.toggleTheme} role="menuitem">
                        <ReactSVG className={themeIcon} path={ThemeIcon} />
                    </button>

                    <button className="qilin-button" onClick={this.props.toggleFormula} role="menuitem">
                        <ReactSVG className={forumlaIcon} path={FormulaIcon} />
                    </button>

                    <button className="qilin-button" onClick={this.props.togglePreview} role="menuitem">
                        <ReactSVG className={previewIcon} path={PreviewIcon} />
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;
