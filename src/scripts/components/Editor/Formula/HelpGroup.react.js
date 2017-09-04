import React, { Component }         from "react";
import PropTypes                    from "prop-types";
import EditorForumlaHelpGroupSymbol from "./HelpGroupSymbol.react";
import { getMarkdown }              from "../../../utils/MarkdownUtils";

class EditorForumlaHelpGroup extends Component {
    static propTypes = {
        name    : PropTypes.string.isRequired,
        symbols : PropTypes.object.isRequired,
        choose  : PropTypes.func
    }

    componentWillMount() {
        this.markdown = getMarkdown( {
            html       : true,
            linkify    : true,
            typography : true
        } );
    }

    render() {
        const { name, symbols, choose } = this.props;

        return (
            <div className="formula-help-group">
                <div className="formula-help-group-name">{name}</div>

                <div className="formula-help-group-symbols">
                    {Object.keys( symbols ).map( id => (
                        <EditorForumlaHelpGroupSymbol
                            key={id}
                            data={symbols[ id ]}
                            choose={choose}
                            renderer={this.markdown}
                        />
                    ) )}
                </div>
            </div>
        );
    }
}

export default EditorForumlaHelpGroup;
