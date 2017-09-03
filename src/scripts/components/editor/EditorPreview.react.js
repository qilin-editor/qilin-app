import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import PropTypes            from "prop-types";
import { getMarkdown }      from "../../utils/MarkdownUtils";

@inject( [ "editorStore" ] )
@observer
class EditorPreview extends Component {
    static propTypes = {
        editorStore : PropTypes.object
    }

    componentWillMount() {
        this.markdown = getMarkdown( {
            html       : true,
            linkify    : true,
            typography : true
        } );
    }

    render() {
        return (
            <div
                className="editor-preview qilin-panel typo"
                dangerouslySetInnerHTML={{ __html : this.markdown.render( this.props.editorStore.content ) }}
            />
        );
    }
}

export default EditorPreview;
