import React, { Component } from "react";

import AppContent   from "./AppContent.react";
import AppHeader    from "./AppHeader.react";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader />
                <AppContent />
            </div>
        );
    }
}
