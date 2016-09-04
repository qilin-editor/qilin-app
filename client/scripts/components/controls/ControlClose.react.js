import React, { Component, PropTypes } from "react";

export default class ControlClose extends Component {
    propTypes : {
        window : PropTypes.object.isRequired
    }

    onClick = event => {
        event.preventDefault();
        event.stopPropagation();

        this.props.window.close( true );
    }

    render() {
        return (
            <div onClick={this.onClick} className="control-close"></div>
        );
    }
}
