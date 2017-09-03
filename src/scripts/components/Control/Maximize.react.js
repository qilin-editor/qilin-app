import React, { Component } from "react";
import PropTypes            from "prop-types";

class ControlMaximize extends Component {
    static propTypes = {
        window : PropTypes.object.isRequired
    }

    onClick = () => {
        this.props.window.toggleFullscreen();
    }

    render() {
        return (
            <div onClick={this.onClick} className="control-maximize" />
        );
    }
}

export default ControlMaximize;
