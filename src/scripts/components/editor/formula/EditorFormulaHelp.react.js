import React, { Component }         from "react";
import PropTypes                    from "prop-types";
import { getMarkdown }              from "../../../utils/MarkdownUtils";
import AccentsConstants             from "../../../constants/katex/AccentsConstant";
import AnnotationsConstant          from "../../../constants/katex/AnnotationsConstant";
import ArrowsConstant               from "../../../constants/katex/ArrowsConstant";
import BigOperatorsConstant         from "../../../constants/katex/BigOperatorsConstant";
import BinaryOperatorsConstant      from "../../../constants/katex/BinaryOperatorsConstant";
import BinomialCoefficientsConstant from "../../../constants/katex/BinomialCoefficientsConstant";
import DeliminersConstant           from "../../../constants/katex/DeliminersConstant";
import EnvironmentsConstant         from "../../../constants/katex/EnvironmentsConstant";
import ExtensibleArrowsConstant     from "../../../constants/katex/ExtensibleArrowsConstant";
import FractionsConstant            from "../../../constants/katex/FractionsConstant";
import GreekLettersConstant         from "../../../constants/katex/GreekLettersConstant";
import LogicAndSetTheoryConstant    from "../../../constants/katex/LogicAndSetTheoryConstant";
import MathOperatorsConstant        from "../../../constants/katex/MathOperatorsConstant";
import NegatedRelationsConstant     from "../../../constants/katex/NegatedRelationsConstant";
import OtherLettersConstant         from "../../../constants/katex/OtherLettersConstant";
import RelationsConstant            from "../../../constants/katex/RelationsConstant";
import VerticalLayoutConstant       from "../../../constants/katex/VerticalLayoutConstant";


class EditorForumlaHelp extends Component {
    static propTypes = {
        choose : PropTypes.func.isRequired
    }

    componentWillMount() {
        this.markdown = getMarkdown( {
            html       : true,
            linkify    : true,
            typography : true
        } );
    }

    renderGroup = group => {
        return Object.keys( group ).map( id => {
            const symbol = group[ id ];

            return this.renderSymbol( id, symbol );
        } );
    }

    renderSymbol = ( id, symbol ) => {
        return (
            <div
                key={id}
                className="formula-help-symbol"
                onClick={() => this.props.choose( symbol, id )}
                dangerouslySetInnerHTML={{ __html : this.markdown.render(
                    "```katex\n" + symbol.content + "\n```"
                ) }}
            />
        );
    }

    render() {
        return (
            <div className="formula-help">
                {this.renderGroup( AccentsConstants )}
                {this.renderGroup( AnnotationsConstant )}
                {this.renderGroup( ArrowsConstant )}
                {this.renderGroup( BigOperatorsConstant )}
                {this.renderGroup( BinaryOperatorsConstant )}
                {this.renderGroup( BinomialCoefficientsConstant )}
                {this.renderGroup( DeliminersConstant )}
                {this.renderGroup( EnvironmentsConstant )}
                {this.renderGroup( ExtensibleArrowsConstant )}
                {this.renderGroup( FractionsConstant )}
                {this.renderGroup( GreekLettersConstant )}
                {this.renderGroup( LogicAndSetTheoryConstant )}
                {this.renderGroup( MathOperatorsConstant )}
                {this.renderGroup( NegatedRelationsConstant )}
                {this.renderGroup( OtherLettersConstant )}
                {this.renderGroup( RelationsConstant )}
                {this.renderGroup( VerticalLayoutConstant )}
            </div>
        );
    }
}

export default EditorForumlaHelp;
