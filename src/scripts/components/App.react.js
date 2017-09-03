import React, { Component } from "react";
import className            from "classnames";
import AppHeader            from "./AppHeader.react";
import AppContent           from "./AppContent.react";
import AppFooter            from "./AppFooter.react";

class App extends Component {
    state = {
        isPreviewToggled : false,
        isFormulaToggled : false,
        isThemeToggled   : false
    }

    togglePreview = () => {
        this.setState( {
            isPreviewToggled : !this.state.isPreviewToggled
        } );
    }

    toggleFormula = () => {
        this.setState( {
            isFormulaToggled : !this.state.isFormulaToggled
        } );
    }

    toggleTheme = () => {
        this.setState( {
            isThemeToggled : !this.state.isThemeToggled
        } );
    }

    render() {
        const theme = className( "app qilin-panel", {
            "is-light" : !this.state.isThemeToggled,
            "is-dark"  :  this.state.isThemeToggled
        } );

        return (
            <div className={theme}>
                <AppHeader {...this.state}
                    toggleTheme={this.toggleTheme}
                    togglePreview={this.togglePreview}
                    toggleFormula={this.toggleFormula}
                />

                <AppContent {...this.state}
                    toggleFormula={this.toggleFormula}
                />

                <AppFooter  {...this.state} />
            </div>
        );
    }
}

export default App;
