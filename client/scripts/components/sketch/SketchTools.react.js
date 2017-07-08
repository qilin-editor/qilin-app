import React, { Component, PropTypes } from "react";
import className                       from "classnames";
import ReactSVG                        from "react-svg";
import SketchConstants                 from "../../constants/SketchConstants";

export default class SketchTools extends Component {
    static propTypes = {
        drawer           : PropTypes.object,
        selectedTool     : PropTypes.string,
        save             : PropTypes.func,
        setTool          : PropTypes.func,
        setColor         : PropTypes.func,
        setArrow         : PropTypes.func,
        setDashed        : PropTypes.func,
        setStrokeSize    : PropTypes.func,
        setFontName      : PropTypes.func,
        toggleBold       : PropTypes.func,
        toggleItalic     : PropTypes.func,
        toggleUnderlined : PropTypes.func,
    }

    render() {
        const st      = this.props.selectedTool;
        const setTool = this.props.setTool;

        const ia = "is-active";
        const bc = "geometry-icon qilin-panel";

        const brush     = className( bc, { [ ia ] : st === SketchConstants.SKETCH_BRUSH } );
        const eraser    = className( bc, { [ ia ] : st === SketchConstants.SKETCH_ERASER } );
        const line      = className( bc, { [ ia ] : st === SketchConstants.SKETCH_LINE } );
        const multiline = className( bc, { [ ia ] : st === SketchConstants.SKETCH_MULTILINE } );
        const ellipse   = className( bc, { [ ia ] : st === SketchConstants.SKETCH_ELLIPSE } );
        const rectangle = className( bc, { [ ia ] : st === SketchConstants.SKETCH_RECTANGLE } );
        const text      = className( bc, { [ ia ] : st === SketchConstants.SKETCH_TEXT } );

        return (
            <div className="geometry-tools qilin-panel">
                <div className="geometry-group qilin-panel">
                    <div className={brush} onClick={() => setTool( SketchConstants.SKETCH_BRUSH )}>
                        <ReactSVG className="qilin-icon" path="images/icons/editor/brush.svg" />
                    </div>

                    <div className={eraser} onClick={() => setTool( SketchConstants.SKETCH_ERASER )}>
                        <ReactSVG className="qilin-icon" path="images/icons/editor/erase.svg" />
                    </div>
                </div>

                <div className="geometry-group qilin-panel">
                    <div className={line} onClick={() => setTool( SketchConstants.SKETCH_LINE )}>
                        <ReactSVG className="qilin-icon" path="images/icons/editor/line.svg" />
                    </div>

                    <div className={multiline} onClick={() => setTool( SketchConstants.SKETCH_MULTILINE )}>
                        <ReactSVG className="qilin-icon" path="images/icons/editor/multiline.svg" />
                    </div>

                    <div className={ellipse} onClick={() => setTool( SketchConstants.SKETCH_ELLIPSE )}>
                        <ReactSVG className="qilin-icon" path="images/icons/editor/circle.svg" />
                    </div>

                    <div className={rectangle} onClick={() => setTool( SketchConstants.SKETCH_RECTANGLE )}>
                        <ReactSVG className="qilin-icon" path="images/icons/editor/square.svg" />
                    </div>

                    <div className={text} onClick={() => setTool( SketchConstants.SKETCH_TEXT )}>
                        <ReactSVG className="qilin-icon" path="images/icons/editor/text.svg" />
                    </div>
                </div>

                <div className="geometry-group qilin-panel">
                    <div className="geometry-icon qilin-panel" onClick={() => this.props.drawer.clear()}>
                        <ReactSVG className="qilin-icon" path="images/icons/editor/delete.svg" />
                    </div>

                    <div className="geometry-icon qilin-panel" onClick={() => this.props.drawer.undo()}>
                        <ReactSVG className="qilin-icon" path="images/icons/editor/undo.svg" />
                    </div>

                    <div className="geometry-icon qilin-panel" onClick={() => this.props.drawer.redo()}>
                        <ReactSVG className="qilin-icon" path="images/icons/editor/redo.svg" />
                    </div>
                </div>
            </div>
        );
    }
}
