import React, { PropTypes, Component }  from "react";
import ReactSVG                         from "react-svg/dist/react-svg";
import className                        from "classnames";
import SplitPane                        from "react-split-pane";
import EditorEditable                   from "./editor/EditorEditable.react";
import EditorPreview                    from "./editor/EditorPreview.react";
import ModalConstants                   from "../constants/ModalConstants";

export default class AppContent extends Component {
    static propTypes = {
        toggleModal      : PropTypes.func.isRequired,
        isPreviewToggled : PropTypes.bool.isRequired,

        isModalFormulasOpen : PropTypes.bool.isRequired,
        isModalGeometryOpen : PropTypes.bool.isRequired,
    }

    render() {
        const splitPaneClasses = className( "app-content-pane", {
            "is-preview-hidden" : ! this.props.isPreviewToggled,
        } );

        const textButton = className( "app-content-icon qilin-panel", {
            "is-active" : ! this.props.isModalFormulasOpen
                       && ! this.props.isModalGeometryOpen,
        } );

        const formulasButton = className( "app-content-icon qilin-panel", {
            "is-active" : this.props.isModalFormulasOpen,
        } );

        const geometryButton = className( "app-content-icon qilin-panel", {
            "is-active" : this.props.isModalGeometryOpen,
        } );

        return (
            <div className="app-content qilin-panel">
                <div className="app-content-main qilin-panel">
                    <SplitPane
                        split="vertical"
                        minSize={300}
                        maxSize={-300}
                        defaultSize="50%"
                        className={splitPaneClasses}
                    >
                        <EditorEditable />
                        <EditorPreview />
                    </SplitPane>
                </div>

                <div className="app-content-left qilin-panel">
                    <div className={textButton} onClick={() => this.props.toggleModal( ModalConstants.MODAL_TEXT )}>
                        <ReactSVG className="qilin-icon" path="images/icons/menu/text.svg" />
                    </div>

                    <div className={formulasButton} onClick={() => this.props.toggleModal( ModalConstants.MODAL_FORMULAS )}>
                        <ReactSVG className="qilin-icon" path="images/icons/menu/functions.svg" />
                    </div>

                    <div className={geometryButton} onClick={() => this.props.toggleModal( ModalConstants.MODAL_GEOMETRY )}>
                        <ReactSVG className="qilin-icon" path="images/icons/menu/gesture.svg" />
                    </div>
                </div>
            </div>
        );
    }
}
