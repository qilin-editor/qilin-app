import React, { Component } from "react";
import PropTypes from "prop-types";
import EditorForumlaHelpGroupSymbol from "./HelpGroupSymbol";
import { getMarkdown } from "../../../utils/MarkdownUtils";

class EditorForumlaHelpGroup extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        choose: PropTypes.func.isRequired,
        symbols: PropTypes.objectOf(PropTypes.object).isRequired,
    }

    componentWillMount() {
        this.markdown = getMarkdown({
            html: true,
            linkify: true,
            typography: true,
        });
    }

    render() {
        const { name, symbols, choose } = this.props;

        return (
            <div className="formula-help-group">
                <div className="formula-help-group-name">{name}</div>

                <div className="formula-help-group-symbols">
                    {Object.keys(symbols).map(id => (
                        <EditorForumlaHelpGroupSymbol
                            key={id}
                            data={symbols[id]}
                            choose={choose}
                            renderer={this.markdown}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default EditorForumlaHelpGroup;
