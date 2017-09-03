import React, { Component } from "react";
import Draggable            from "react-draggable";
import PropTypes            from "prop-types";
import className            from "classnames";

class EditorForumla extends Component {
    static propTypes = {
        isOpen : PropTypes.bool.isRequired,
        close  : PropTypes.func.isRequired
    }

    onClose = () => {
        this.props.close();
    }

    render() {
        const popupClasses = className( "qilin-panel", "qilin-popup", {
            "is-open" : this.props.isOpen
        } );

        return (
            <Draggable handle=".qilin-popup-header">
                <div>
                    <div className={popupClasses}>
                        <div className="qilin-popup-header">
                            <div className="qilin-popup-header-title">Math forumla</div>

                            <div className="qilin-popup-header-close">
                                <button className="qilin-button is-big" onClick={this.onClose}>Close</button>
                            </div>

                            <div className="qilin-popup-header-done">
                                <button className="qilin-button is-big">Done</button>
                            </div>
                        </div>

                        <div className="qilin-popup-content">
                        </div>
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default EditorForumla;
