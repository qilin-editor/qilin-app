import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Markdown from "markdown-it";

class EditorForumlaHelpGroupSymbol extends PureComponent {
    static propTypes = {
        data: PropTypes.shape({
            type: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            alias: PropTypes.arrayOf(PropTypes.string),
        }).isRequired,
        renderer: PropTypes.instanceOf(Markdown).isRequired,
        choose: PropTypes.func,
    }

    onChoose = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.props.choose(this.props.data);
    }

    render() {
        return (
            <button
                className="formula-help-symbol"
                onClick={this.onChoose}
                title={this.props.data.content}
                dangerouslySetInnerHTML={{ __html: this.props.renderer.render(
                    `\`\`\`katex\n${this.props.data.content}\n\`\`\``,
                ) }}
            />
        );
    }
}

export default EditorForumlaHelpGroupSymbol;
