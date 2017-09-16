import React, { PureComponent } from "react";
import Close from "./Close";
import Maximize from "./Maximize";
import Minimize from "./Minimize";

class ControlWrapper extends PureComponent {
    render() {
        const WebWindow = nw.Window.get();

        return (
            <div className="app-header-controls controls-container">
                <Close window={WebWindow} />
                <Minimize window={WebWindow} />
                <Maximize window={WebWindow} />
            </div>
        );
    }
}

export default ControlWrapper;
