import React, { Component } from "react";
import ReactSVG             from "react-svg/dist/react-svg";
import className            from "classnames";

import Controls from "./controls/Controls.react";

export default class AppHeader extends Component {
    render() {
        const themeButton = className( "qilin-button", {
            "is-active" : this.props.isThemeToggled
        } );

        const themeIcon = className( "qilin-icon", {
            "is-active" : this.props.isThemeToggled
        } );

        const previewButton = className( "qilin-button", {
            "is-active" : this.props.isPreviewToggled
        } );

        const previewIcon = className( "qilin-icon", {
            "is-active" : this.props.isPreviewToggled
        } );

        return (
            <div className="app-header qilin-panel">
                <Controls />

                <div className="app-header-buttons">
                    <div className={themeButton} onClick={this.props.toggleTheme}>
                        <ReactSVG className={themeIcon} path="images/icons/menu/theme.svg" />
                    </div>

                    <div className={previewButton} onClick={this.props.togglePreview}>
                        <ReactSVG className={previewIcon} path="images/icons/menu/preview.svg" />
                    </div>
                </div>
            </div>
        );
    }
}
