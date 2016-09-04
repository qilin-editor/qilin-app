import React, { Component } from "react";

import EditorEditable   from "./editor/EditorEditable.react";
import EditorPreview    from "./editor/EditorPreview.react";

export default class AppContent extends Component {
    render() {
        return (
            <div className="app-content">
                <div className="app-content-main">
                    <EditorEditable />
                </div>
            </div>
        );
    }
}
