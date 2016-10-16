import React, { PropTypes, Component } from "react";

export default class ControlMaximize extends Component {
    static propTypes = {
        window : PropTypes.object.isRequired,
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
