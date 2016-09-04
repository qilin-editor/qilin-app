import React, { Component } from "react";

import Controls from "./controls/Controls.react";

export default class AppHeader extends Component {
    render() {
        return (
            <div className="app-header">
                <Controls />
            </div>
        );
    }
}
