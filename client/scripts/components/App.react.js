import React, { Component } from "react";
import className            from "classnames";
import AppContent           from "./AppContent.react";
import AppFooter            from "./AppFooter.react";
import AppHeader            from "./AppHeader.react";
import Sketch               from "./sketch/Sketch.react";
import Modal                from "react-modal";
import ModalConstants       from "../constants/ModalConstants";

export default class App extends Component {
    state = {
        isModalFormulasOpen : false,
        isModalSketchOpen   : false,
        isPreviewToggled    : false,
        isThemeToggled      : false,
    }

    togglePreview = () => {
        this.setState( {
            isPreviewToggled : ! this.state.isPreviewToggled,
        } );
    }

    toggleTheme = () => {
        this.setState( {
            isThemeToggled : ! this.state.isThemeToggled,
        } );
    }

    toggleModal = modal => {
        switch ( modal ) {
            case ModalConstants.MODAL_TEXT:
                return this.setState( {
                    isModalFormulasOpen : false,
                    isModalSketchOpen   : false,
                } );

            case ModalConstants.MODAL_FORMULAS:
                return this.setState( {
                    isModalFormulasOpen : ! this.state.isModalFormulasOpen,
                    isModalSketchOpen   : false,
                } );

            case ModalConstants.MODAL_SKETCH:
                return this.setState( {
                    isModalFormulasOpen : false,
                    isModalSketchOpen   : ! this.state.isModalSketchOpen,
                } );
        }
    }

    render() {
        const theme = className( {
            "./styles/themes/light/index.min.css" : this.state.isThemeToggled,
            "./styles/themes/dark/index.min.css"  : ! this.state.isThemeToggled,
        } );

        return (
            <div className="app qilin-panel">
                <link rel="stylesheet" href={theme} />

                <AppHeader  {...this.state} toggleTheme={this.toggleTheme} togglePreview={this.togglePreview} />
                <AppContent {...this.state} toggleModal={this.toggleModal} />
                <AppFooter  {...this.state} />

                <Modal
                    isOpen={this.state.isModalFormulasOpen}

                    className="modal qilin-panel"
                    portalClassName="modal-portal"
                    overlayClassName="modal-overlay qilin-panel"
                >
                    Formulas here
                </Modal>

                <Modal
                    isOpen={this.state.isModalSketchOpen}

                    className="modal qilin-panel"
                    portalClassName="modal-portal"
                    overlayClassName="modal-overlay qilin-panel"
                >
                    <Sketch />
                </Modal>
            </div>
        );
    }
}
