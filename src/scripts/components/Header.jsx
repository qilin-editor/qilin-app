import React, { PureComponent } from "react";
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";
import className from "classnames";
import PropTypes from "prop-types";
import ReactSVG from "react-svg";
import Controls from "./Controls";

@inject(["editorStore"])
@observer
class Header extends PureComponent {
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
        const themeButton = className("qilin-button", {
            "is-active": this.props.isThemeToggled,
        });

        const formulaButton = className("qilin-button", {
            "is-active": this.props.isFormulaToggled,
        });

        const previewButton = className("qilin-button", {
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
                    <button className={themeButton} onClick={this.props.toggleTheme} role="menuitem">
                        <ReactSVG className="qilin-button-icon" path={require("../../images/icons/menu/theme.svg")} />
                    </button>

                    <button className={formulaButton} onClick={this.props.toggleFormula} role="menuitem">
                        <ReactSVG className="qilin-button-icon" path={require("../../images/icons/menu/formula.svg")} />
                    </button>

                    <button className={previewButton} onClick={this.props.togglePreview} role="menuitem">
                        <ReactSVG className="qilin-button-icon" path={require("../../images/icons/menu/preview.svg")} />
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;
