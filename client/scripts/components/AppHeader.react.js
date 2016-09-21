import React, { Component } from "react";
import ReactSVG             from "react-svg/dist/react-svg";

import Controls from "./controls/Controls.react";

export default class AppHeader extends Component {
    render() {
        return (
            <div className="app-header">
                <Controls />

                <div className="app-header-buttons">
                    <div className="app-header-button" onClick={this.props.togglePreview}>
                        <ReactSVG path="images/icons/menu/preview.svg" className="icon" />
                    </div>
                </div>
            </div>
        );
    }
}
