import React, { Component } from "react";

import ControlClose     from "./ControlClose.react";
import ControlMaximize  from "./ControlMaximize.react";
import ControlMinimize  from "./ControlMinimize.react";

export default class Controls extends Component {
    render() {
        const WebWindow = nw.Window.get();

        return (
            <div className="controls-container">
                <ControlClose window={WebWindow} />
                <ControlMinimize window={WebWindow} />
                <ControlMaximize window={WebWindow} />
            </div>
        );
    }
}
