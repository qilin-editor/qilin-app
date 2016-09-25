import React, { Component, PropTypes }  from "react";
import ReactSVG                         from "react-svg/dist/react-svg";

export default class AlertsError extends Component {
    static propTypes = {
        index   : PropTypes.number.isRequired,
        message : PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className="alert-success qilin-panel" style={ { zIndex : this.props.index } }>
                <ReactSVG path="images/icons/alerts/info.svg" className="alert-icon qilin-icon" />

                <div className="alert-message">{this.props.message}</div>
            </div>
        );
    }
}
