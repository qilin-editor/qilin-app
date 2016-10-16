import React, { PropTypes, Component } from "react";

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
