import React, { PropTypes, Component } from "react";

export default class ControlMinimize extends Component {
    static propTypes = {
        window : PropTypes.object.isRequired,
    }

    onClick = () => {
        this.props.window.minimize();
    }

    render() {
        return (
            <div onClick={this.onClick} className="control-minimize" />
        );
    }
}
