import React, { Component } from "react";
import className            from "classnames";

import AppContent           from "./AppContent.react";
import AppHeader            from "./AppHeader.react";
import Alerts               from "./alerts/Alerts.react";

import Modal                from "react-modal";
import GeometryModal        from "./modals/GeometryModal.react";
import ModalConstants       from "../constants/ModalConstants";

export default class App extends Component {
    state = {
        isModalFormulasOpen : false,
        isModalGeometryOpen : false,

        isPreviewToggled : false,
        isThemeToggled   : false,
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
                    isModalGeometryOpen : false,
                } );

            case ModalConstants.MODAL_FORMULAS:
                return this.setState( {
                    isModalFormulasOpen : ! this.state.isModalFormulasOpen,
                    isModalGeometryOpen : false,
                } );

            case ModalConstants.MODAL_GEOMETRY:
                return this.setState( {
                    isModalFormulasOpen : false,
                    isModalGeometryOpen : ! this.state.isModalGeometryOpen,
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

                <Alerts />

                <Modal
                    key={ModalConstants.MODAL_FORMULAS}
                    isOpen={this.state.isModalFormulasOpen}

                    className="modal qilin-panel"
                    portalClassName="modal-portal"
                    overlayClassName="modal-overlay qilin-panel"
                >
                    Formulas here
                </Modal>

                <Modal
                    key={ModalConstants.MODAL_GEOMETRY}
                    isOpen={this.state.isModalGeometryOpen}

                    className="modal qilin-panel"
                    portalClassName="modal-portal"
                    overlayClassName="modal-overlay qilin-panel"
                >
                    <GeometryModal />
                </Modal>
            </div>
        );
    }
}
