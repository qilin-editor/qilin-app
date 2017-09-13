import React, { Component } from "react";
import PropTypes from "prop-types";
import EditorForumlaHelpGroup from "./HelpGroup";
import KatexConstant from "../../../constants/katex";

class EditorForumlaHelp extends Component {
    static propTypes = {
        choose: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div className="formula-help">
                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Accents"
                    symbols={KatexConstant.Accents}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Greek letters"
                    symbols={KatexConstant.GreekLetters}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Other letters"
                    symbols={KatexConstant.OtherLetters}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Logic and Set Theory"
                    symbols={KatexConstant.LogicAndSetTheory}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Big operators"
                    symbols={KatexConstant.BigOperators}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Environments"
                    symbols={KatexConstant.Environments}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Annotations"
                    symbols={KatexConstant.Annotations}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Math operators"
                    symbols={KatexConstant.MathOperators}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Binary operators"
                    symbols={KatexConstant.BinaryOperators}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Deliminers"
                    symbols={KatexConstant.Deliminers}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Relations"
                    symbols={KatexConstant.Relations}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Negated relations"
                    symbols={KatexConstant.NegatedRelations}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Vertical layout"
                    symbols={KatexConstant.VerticalLayout}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Arrows"
                    symbols={KatexConstant.Arrows}
                />

                <EditorForumlaHelpGroup
                    {...this.props}
                    name="Extensible arrows"
                    symbols={KatexConstant.ExtensibleArrows}
                />
            </div>
        );
    }
}

export default EditorForumlaHelp;
