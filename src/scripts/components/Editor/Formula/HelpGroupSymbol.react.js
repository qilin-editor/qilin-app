import React, { Component } from "react";
import PropTypes            from "prop-types";

class EditorForumlaHelpGroupSymbol extends Component {
    static propTypes = {
        data        : PropTypes.object.isRequired,
        renderer    : PropTypes.object.isRequired,
        choose      : PropTypes.func
    }

    onChoose = event => {
        event.preventDefault();
        event.stopPropagation();

        this.props.choose( this.props.data );
    }

    render() {
        return (
            <div
                className="formula-help-symbol"
                onClick={this.onChoose}
                title={this.props.data.content}
                dangerouslySetInnerHTML={{ __html : this.props.renderer.render(
                    "```katex\n" + this.props.data.content + "\n```"
                ) }}
            />
        );
    }
}

export default EditorForumlaHelpGroupSymbol;
