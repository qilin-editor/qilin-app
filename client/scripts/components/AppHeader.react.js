import open                             from "opn";
import path                             from "path";
import ReactSVG                         from "react-svg";
import className                        from "classnames";
import Controls                         from "./controls/Controls.react";
import EditorStore                      from "../stores/EditorStore";
import React, { Component } from "react";
import PropTypes            from "prop-types";

export default class AppHeader extends Component {
    static propTypes = {
        toggleTheme      : PropTypes.func.isRequired,
        togglePreview    : PropTypes.func.isRequired,
        isThemeToggled   : PropTypes.bool.isRequired,
        isPreviewToggled : PropTypes.bool.isRequired,
    }

    componentDidMount() {
        EditorStore.addChangeListener( this.editorDidUpdate );
    }

    componentWillUnmount() {
        EditorStore.removeChangeListener( this.editorDidUpdate );
    }

    editorDidUpdate = () => {
        this.forceUpdate();
    }

    revealFolder = () => {
        if ( EditorStore.path !== "" )
            open( path.dirname( EditorStore.path ) );
    }

    render() {
        const themeActive   = { "is-active" : this.props.isThemeToggled };
        const previewActive = { "is-active" : this.props.isPreviewToggled };

        const themeButton   = className( "qilin-button", themeActive );
        const themeIcon     = className( "qilin-button-icon", themeActive );
        const previewButton = className( "qilin-button", previewActive );
        const previewIcon   = className( "qilin-button-icon", previewActive );

        const titleClasses = className( "app-header-title", {
            "is-clickable" : EditorStore.path !== "",
        } );

        return (
            <div className="app-header qilin-panel">
                <Controls />

                <div className={titleClasses} onClick={this.revealFolder}>
                    {path.basename( EditorStore.path ) || "Untitled"}
                </div>

                <div className="app-header-buttons">
                    <div className={themeButton} onClick={this.props.toggleTheme}>
                        <ReactSVG className={themeIcon} path="images/icons/menu/theme.svg" />
                    </div>

                    <div className={previewButton} onClick={this.props.togglePreview}>
                        <ReactSVG className={previewIcon} path="images/icons/menu/preview.svg" />
                    </div>
                </div>
            </div>
        );
    }
}
