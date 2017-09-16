import React, { PureComponent } from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";

class Footer extends PureComponent {
    render() {
        return (
            <ReactTransitionGroup
                className="alerts qilin-panel"
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                {/* … */}
            </ReactTransitionGroup>
        );
    }
}

export default Footer;
