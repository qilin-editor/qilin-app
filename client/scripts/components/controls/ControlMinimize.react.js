import React, { Component, PropTypes } from "react";

export default class ControlMinimize extends Component {
    propTypes : {
        window : PropTypes.object.isRequired
    }

    onClick = event => {
        event.preventDefault();
        event.stopPropagation();

        this.props.window.minimize();
    }

    render() {
        return (
            <div onClick={this.onClick} className="control-minimize"></div>
        );
    }
}
