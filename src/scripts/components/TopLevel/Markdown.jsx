import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import className from "classnames";
import { getMarkdown } from "../../utils/MarkdownUtils";

class Markdown extends PureComponent {
    static propTypes = {
        content: PropTypes.string.isRequired,
        className: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.string,
        ]),
        onClick: PropTypes.func,
    }

    static renderer = getMarkdown({
        html: true,
        linkify: true,
        typography: true,
    })

    defaultProps = {
        onClick: () => null,
    }

    render() {
        return (
            <div
                role="presentation"
                onClick={this.props.onClick}
                className={className(this.props.className)}
                dangerouslySetInnerHTML={{ __html: Markdown.renderer.render(this.props.content) }}
            />
        );
    }
}

export default Markdown;
