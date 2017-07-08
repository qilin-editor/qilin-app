import open                 from "opn";
import React, { Component } from "react";
import { observer }         from "mobx-react";
import PropTypes            from "prop-types";
import className            from "classnames";
import ReactSVG             from "react-svg";
import Controls             from "./controls/Controls.react";
import EditorStore          from "../stores/EditorStore";

@observer
class AppHeader extends Component {
    static propTypes = {
        toggleTheme      : PropTypes.func.isRequired,
        togglePreview    : PropTypes.func.isRequired,
        isThemeToggled   : PropTypes.bool.isRequired,
        isPreviewToggled : PropTypes.bool.isRequired,
    }

    revealFolder = () => {
        if ( EditorStore.path !== "" ) {
            open( EditorStore.directory );
        }
    }

    render() {
        const themeIcon = className( "qilin-button-icon", {
            "is-active" : this.props.isThemeToggled
        } );

        const previewIcon = className( "qilin-button-icon", {
            "is-active" : this.props.isPreviewToggled
        } );

        const titleClasses = className( "app-header-title", {
            "is-clickable" : EditorStore.path !== ""
        } );

        return (
            <div className="app-header qilin-panel">
                <Controls />

                <div className={titleClasses} onClick={this.revealFolder}>
                    {EditorStore.filename}
                </div>

                <div className="app-header-buttons">
                    <div className="qilin-button" onClick={this.props.toggleTheme}>
                        <ReactSVG className={themeIcon} path="images/icons/menu/theme.svg" />
                    </div>

                    <div className="qilin-button" onClick={this.props.togglePreview}>
                        <ReactSVG className={previewIcon} path="images/icons/menu/preview.svg" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AppHeader;
