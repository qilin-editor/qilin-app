import React, { Component } from "react";
import PropTypes            from "prop-types";

export default class ControlClose extends Component {
    static propTypes = {
        window : PropTypes.object.isRequired,
    }

    onClick = () => {
        this.props.window.close( true );
    }

    render() {
        return (
            <div onClick={this.onClick} className="control-close" />
        );
    }
}
