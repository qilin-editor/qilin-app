import React, { Component, PropTypes } from "react";

export default class AlertsFailure extends Component {
    static propTypes = {
        index   : PropTypes.number.isRequired,
        message : PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="alert-failure" style={ { zIndex : this.props.index } }>
                <div className="alert-icon">!</div>
                <div className="alert-message">{this.props.message}</div>
            </div>
        );
    }
}
