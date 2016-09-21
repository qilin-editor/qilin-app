import React, { Component } from "react";

import SplitPane        from "react-split-pane";
import EditorEditable   from "./editor/EditorEditable.react";
import EditorPreview    from "./editor/EditorPreview.react";

export default class AppContent extends Component {
    render() {
        return (
            <div className="app-content">
                <div className="app-content-main">
                    <SplitPane split="vertical" minSize={50} defaultSize="50%" primary="second">
                        <EditorEditable />
                        <EditorPreview />
                    </SplitPane>
                </div>
            </div>
        );
    }
}
