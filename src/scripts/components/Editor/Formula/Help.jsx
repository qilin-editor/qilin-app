import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import EditorForumlaHelpGroup from "./HelpGroup";
import Markdown from "../../TopLevel/Markdown";
import KatexConstant from "../../../constants/katex";

class EditorForumlaHelp extends PureComponent {
    static propTypes = {
        choose: PropTypes.func.isRequired,
    }

    static symbols = {
        "Accents ": KatexConstant.Accents,
        "Greek Letters": KatexConstant.GreekLetters,
        "Other letters": KatexConstant.OtherLetters,
        "Logic and Set Theory": KatexConstant.LogicAndSetTheory,
        "Big operators": KatexConstant.BigOperators,
        "Environments ": KatexConstant.Environments,
        "Annotations ": KatexConstant.Annotations,
        "Math operators": KatexConstant.MathOperators,
        "Binary operators": KatexConstant.BinaryOperators,
        "Deliminers ": KatexConstant.Deliminers,
        "Relations ": KatexConstant.Relations,
        "Negated relations": KatexConstant.NegatedRelations,
        "Vertical layout": KatexConstant.VerticalLayout,
        "Arrows ": KatexConstant.Arrows,
        "Extensible arrows": KatexConstant.ExtensibleArrows,
    }

    renderGroup = (name, symbols) => (
        <EditorForumlaHelpGroup key={name} name={name}>
            {Object.keys(symbols).map(id => (
                <Markdown
                    key={id}
                    className="formula-help-symbol"
                    content={`\`\`\`katex\n${symbols[id].content}\n\`\`\``}
                    onClick={() => this.props.choose(symbols[id])}
                />
            ))}
        </EditorForumlaHelpGroup>
    )

    render() {
        return (
            <div className="formula-help">
                {Object.keys(EditorForumlaHelp.symbols).map(type => this.renderGroup(type, EditorForumlaHelp.symbols[type]))}
            </div>
        );
    }
}

export default EditorForumlaHelp;
