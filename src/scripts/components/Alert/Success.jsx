import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactSVG from "react-svg";

class AlertSuccess extends PureComponent {
    static propTypes = {
        index: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className="alert-success qilin-panel" style={{ zIndex: this.props.index }}>
                <ReactSVG path="images/icons/alerts/info.svg" className="alert-icon" />

                <div className="alert-message">{this.props.message}</div>
            </div>
        );
    }
}

export default AlertSuccess;
