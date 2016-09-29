import open                             from "opn";
import path                             from "path";

import React, { PropTypes, Component }  from "react";
import className                        from "classnames";

import ReactSVG from "react-svg/dist/react-svg";
import Controls from "./controls/Controls.react";

import EditorStore from "../stores/EditorStore";

export default class AppHeader extends Component {
    static propTypes = {
        toggleTheme   : PropTypes.func.isRequired,
        togglePreview : PropTypes.func.isRequired,

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
        const themeButton = className( "qilin-button", {
            "is-active" : this.props.isThemeToggled,
        } );

        const themeIcon = className( "qilin-button-icon", {
            "is-active" : this.props.isThemeToggled,
        } );

        const previewButton = className( "qilin-button", {
            "is-active" : this.props.isPreviewToggled,
        } );

        const previewIcon = className( "qilin-button-icon", {
            "is-active" : this.props.isPreviewToggled,
        } );

        const titleClasses = className( "aoo-header-title", {
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
