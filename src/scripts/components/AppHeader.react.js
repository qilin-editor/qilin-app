import ThemeIcon            from "../../images/icons/menu/theme.svg";
import PreviewIcon          from "../../images/icons/menu/preview.svg";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import PropTypes            from "prop-types";
import className            from "classnames";
import ReactSVG             from "react-svg";
import Controls             from "./controls/Controls.react";

@inject( [ "editorStore" ] )
@observer
class AppHeader extends Component {
    static propTypes = {
        editorStore      : PropTypes.object,
        toggleTheme      : PropTypes.func.isRequired,
        togglePreview    : PropTypes.func.isRequired,
        isThemeToggled   : PropTypes.bool.isRequired,
        isPreviewToggled : PropTypes.bool.isRequired
    }

    revealFolder = () => {
        if ( this.props.editorStore.path ) {
            require( "opn" )( this.props.editorStore.directory );
        }
    }

    renderFilename = () => {
        const { filename, saved } = this.props.editorStore;
        const saveIndicator = filename ? ( saved ? "" : "*" ) : "";

        return (
            <span>{`${filename || "Untitled"}${saveIndicator}`}</span>
        );
    }

    render() {
        const themeIcon = className( "qilin-button-icon", {
            "is-active" : this.props.isThemeToggled
        } );

        const previewIcon = className( "qilin-button-icon", {
            "is-active" : this.props.isPreviewToggled
        } );

        const titleClasses = className( "app-header-title", {
            "is-clickable" : this.props.editorStore.path
        } );

        return (
            <div className="app-header qilin-panel">
                <Controls />

                <div className={titleClasses} onClick={this.revealFolder}>
                    {this.renderFilename()}
                </div>

                <div className="app-header-buttons">
                    <div className="qilin-button" onClick={this.props.toggleTheme}>
                        <ReactSVG className={themeIcon} path={ThemeIcon} />
                    </div>

                    <div className="qilin-button" onClick={this.props.togglePreview}>
                        <ReactSVG className={previewIcon} path={PreviewIcon} />
                    </div>
                </div>
            </div>
        );
    }
}

export default AppHeader;
