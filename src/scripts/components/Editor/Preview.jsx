import React, { Component } from "react";
import { inject, observer, PropTypes as MobxPropTypes } from "mobx-react";
import PropTypes from "prop-types";
import { getMarkdown } from "../../utils/MarkdownUtils";

@inject(["editorStore"])
@observer
class EditorPreview extends Component {
    static propTypes = {
        editorStore: MobxPropTypes.observableObject,
        isOpen: PropTypes.bool.isRequired,
    }

    componentWillMount() {
        this.markdown = getMarkdown({
            html: true,
            linkify: true,
            typography: true,
        });
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.isOpen === true;
    }

    render() {
        if (!this.props.isOpen) {
            return null;
        }

        return (
            <div
                className="editor-preview qilin-panel typo"
                dangerouslySetInnerHTML={{
                    __html: this.markdown.render(this.props.editorStore.content),
                }}
            />
        );
    }
}

export default EditorPreview;
