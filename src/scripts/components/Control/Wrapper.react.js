import React, { Component } from "react";
import Close                from "./Close.react";
import Maximize             from "./Maximize.react";
import Minimize             from "./Minimize.react";

class ControlWrapper extends Component {
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
