import React, { Component } from "react";

import AppContent           from "./AppContent.react";
import AppHeader            from "./AppHeader.react";
import Alerts               from "./alerts/Alerts.react";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader />
                <AppContent />

                <Alerts />
            </div>
        );
    }
}
