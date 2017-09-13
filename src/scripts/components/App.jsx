import React, { Component } from "react";
import className from "classnames";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import EditorForumlaPopup from "./Editor/Formula/Popup";

class App extends Component {
    state = {
        isPreviewToggled: false,
        isFormulaToggled: false,
        isThemeToggled: false,
    }

    togglePreview = () => {
        this.setState({
            isPreviewToggled: !this.state.isPreviewToggled,
        });
    }

    toggleFormula = () => {
        this.setState({
            isFormulaToggled: !this.state.isFormulaToggled,
        });
    }

    toggleTheme = () => {
        this.setState({
            isThemeToggled: !this.state.isThemeToggled,
        });
    }

    render() {
        const theme = className("app qilin-panel", {
            "is-light": !this.state.isThemeToggled,
            "is-dark": this.state.isThemeToggled,
        });

        return (
            <div className={theme}>
                <Header
                    {...this.state}
                    toggleTheme={this.toggleTheme}
                    togglePreview={this.togglePreview}
                    toggleFormula={this.toggleFormula}
                />

                <Content
                    {...this.state}
                    toggleFormula={this.toggleFormula}
                />

                <EditorForumlaPopup
                    isOpen={this.state.isFormulaToggled}
                    close={this.toggleFormula}
                />

                <Footer {...this.state} />
            </div>
        );
    }
}

export default App;
