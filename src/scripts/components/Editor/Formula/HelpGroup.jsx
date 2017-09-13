import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class EditorForumlaHelpGroup extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
    }

    render() {
        return (
            <div className="formula-help-group">
                <div className="formula-help-group-name">{this.props.name}</div>

                <div className="formula-help-group-symbols">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default EditorForumlaHelpGroup;
