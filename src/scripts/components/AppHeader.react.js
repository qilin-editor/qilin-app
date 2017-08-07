import ThemeIcon            from "../../images/icons/menu/theme.svg";
import PreviewIcon          from "../../images/icons/menu/preview.svg";
import React, { Component } from "react";
import { observer }         from "mobx-react";
import PropTypes            from "prop-types";
import className            from "classnames";
import ReactSVG             from "react-svg";
import Controls             from "./controls/Controls.react";
import EditorStore          from "../stores/EditorStore";

alert( ThemeIcon );

@observer
class AppHeader extends Component {
    static propTypes = {
        toggleTheme      : PropTypes.func.isRequired,
        togglePreview    : PropTypes.func.isRequired,
        isThemeToggled   : PropTypes.bool.isRequired,
        isPreviewToggled : PropTypes.bool.isRequired
    }

    revealFolder = () => {
        if ( EditorStore.path !== "" ) {
            require( "opn" )( EditorStore.directory );
        }
    }

    render() {
        const themeIcon = className( "qilin-button-icon", {
            "is-active" : this.props.isThemeToggled
        } );

        const previewIcon = className( "qilin-button-icon", {
            "is-active" : this.props.isPreviewToggled
        } );

        const titleClasses = className( "app-header-title", {
            "is-clickable" : EditorStore.path !== ""
        } );

        return (
            <div className="app-header qilin-panel">
                <Controls />

                <div className={titleClasses} onClick={this.revealFolder}>
                    {EditorStore.filename}
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
