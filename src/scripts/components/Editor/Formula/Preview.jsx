import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { getMarkdown } from "../../../utils/MarkdownUtils";

class EditorForumlaPreview extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
    }

    componentWillMount() {
        this.markdown = getMarkdown({
            html: true,
            linkify: true,
            typography: true,
        });
    }

    render() {
        return (
            <div
                className="formula-preview"
                dangerouslySetInnerHTML={{ __html: this.markdown.render(
                    `\`\`\`katex\n${this.props.value}\n\`\`\``,
                ) }}
            />
        );
    }
}

export default EditorForumlaPreview;
