import React, { Component } from "react";

import AppContent           from "./AppContent.react";
import AppHeader            from "./AppHeader.react";
import Alerts               from "./alerts/Alerts.react";

export default class App extends Component {
    state = {
        isPreviewToggled : false
    }

    togglePreview = () => {
        this.setState( {
            isPreviewToggled : ! this.state.isPreviewToggled
        } );
    }

    render() {
        return (
            <div className="app">
                <AppHeader  {...this.state} togglePreview={this.togglePreview} />
                <AppContent {...this.state} />

                <Alerts />
            </div>
        );
    }
}
