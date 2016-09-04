import React, { Component, PropTypes } from "react";

export default class ControlMaximize extends Component {
    propTypes : {
        window : PropTypes.object.isRequired
    }

    onClick = event => {
        event.preventDefault();
        event.stopPropagation();

        this.props.window.toggleFullscreen();
    }

    render() {
        return (
            <div onClick={this.onClick} className="control-maximize"></div>
        );
    }
}
