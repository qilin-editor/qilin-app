import React, { PropTypes, Component }  from "react";
import ReactSVG                         from "react-svg/dist/react-svg";
import className                        from "classnames";

import SplitPane        from "react-split-pane";
import EditorEditable   from "./editor/EditorEditable.react";
import EditorPreview    from "./editor/EditorPreview.react";

export default class AppContent extends Component {
    static propTypes = {
        isPreviewToggled : PropTypes.bool.isRequired,
    }

    render() {
        const splitPaneClasses = className( "app-content-pane", {
            "is-preview-hidden" : ! this.props.isPreviewToggled,
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
                    <div className="app-content-icon qilin-panel">
                        <ReactSVG className="qilin-icon" path="images/icons/menu/theme.svg" />
                    </div>
                </div>
            </div>
        );
    }
}
