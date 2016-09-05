import React, { Component, PropTypes } from "react";

export default class AlertsError extends Component {
    static propTypes = {
        title   : PropTypes.string,
        message : PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="alert-info">
                <div className="alert-icon">?</div>
                <div className="alert-message">{this.props.message}</div>
            </div>
        );
    }
}
