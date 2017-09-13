import React, { PureComponent } from "react";
import className from "classnames";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import EditorForumlaPopup from "./Editor/Formula";

class App extends PureComponent {
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
        const theme = className("app", "qilin-panel", {
            "is-light": !this.state.isThemeToggled,
            "is-dark": this.state.isThemeToggled,
        });

        return (
            <div className={theme}>
                <Header
                    isPreviewToggled={this.state.isPreviewToggled}
                    isFormulaToggled={this.state.isFormulaToggled}
                    isThemeToggled={this.state.isThemeToggled}
                    toggleTheme={this.toggleTheme}
                    togglePreview={this.togglePreview}
                    toggleFormula={this.toggleFormula}
                />

                <Content
                    isPreviewToggled={this.state.isPreviewToggled}
                />

                <EditorForumlaPopup
                    isOpen={this.state.isFormulaToggled}
                    close={this.toggleFormula}
                />

                <Footer />
            </div>
        );
    }
}

export default App;
