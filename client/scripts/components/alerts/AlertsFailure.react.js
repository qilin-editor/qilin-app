import ReactSVG                         from "react-svg";
import React, { Component } from "react";
import PropTypes            from "prop-types";

export default class AlertsFailure extends Component {
    static propTypes = {
        index   : PropTypes.number.isRequired,
        message : PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className="alert-failure qilin-panel" style={{ zIndex : this.props.index }}>
                <ReactSVG path="images/icons/alerts/error.svg" className="alert-icon" />

                <div className="alert-message">{this.props.message}</div>
            </div>
        );
    }
}
