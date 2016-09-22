import React, { Component } from "react";
import className            from "classnames";

import SplitPane        from "react-split-pane";
import EditorEditable   from "./editor/EditorEditable.react";
import EditorPreview    from "./editor/EditorPreview.react";

export default class AppContent extends Component {
    render() {
        const splitPaneClasses = className( "app-content-pane", {
            "is-preview-hidden" : ! this.props.isPreviewToggled
        } );

        return (
            <div className="app-content">
                <div className="app-content-main">
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
            </div>
        );
    }
}
