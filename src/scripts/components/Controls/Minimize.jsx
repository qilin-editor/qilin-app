import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ControlMinimize extends PureComponent {
    static propTypes = {
        window: PropTypes.shape({
            close: PropTypes.func.isRequired,
            minimize: PropTypes.func.isRequired,
            toggleFullscreen: PropTypes.func.isRequired,
        }).isRequired,
    }

    onClick = () => {
        this.props.window.minimize();
    }

    render() {
        return (
            <button onClick={this.onClick} className="control-minimize" />
        );
    }
}

export default ControlMinimize;
