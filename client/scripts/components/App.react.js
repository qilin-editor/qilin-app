import React, { Component } from "react";
import className            from "classnames";
import AppContent           from "./AppContent.react";
import AppHeader            from "./AppHeader.react";
import AppFooter            from "./AppFooter.react";

export default class App extends Component {
    state = {
        isPreviewToggled : false,
        isThemeToggled   : false,
    }

    togglePreview = () => {
        this.setState( {
            isPreviewToggled : !this.state.isPreviewToggled,
        } );
    }

    toggleTheme = () => {
        this.setState( {
            isThemeToggled : !this.state.isThemeToggled,
        } );
    }

    render() {
        const theme = className( {
            "./styles/themes/light/index.min.css" : this.state.isThemeToggled,
            "./styles/themes/dark/index.min.css"  : !this.state.isThemeToggled,
        } );

        return (
            <div className="app qilin-panel">
                <link rel="stylesheet" href={theme} />

                <AppHeader  {...this.state} toggleTheme={this.toggleTheme} togglePreview={this.togglePreview} />
                <AppContent {...this.state} />
                <AppFooter  {...this.state} />
            </div>
        );
    }
}
