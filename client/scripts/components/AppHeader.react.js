import React, { Component } from "react";
import ReactSVG             from "react-svg/dist/react-svg";
import className            from "classnames";

import Controls from "./controls/Controls.react";

export default class AppHeader extends Component {
    render() {
        const previewClasses = className( "app-header-button", {
            "is-active" : this.props.isPreviewToggled
        } );

        return (
            <div className="app-header">
                <Controls />

                <div className="app-header-buttons">
                    <div className={previewClasses} onClick={this.props.togglePreview}>
                        <ReactSVG path="images/icons/menu/preview.svg" className="icon" />
                    </div>
                </div>
            </div>
        );
    }
}
