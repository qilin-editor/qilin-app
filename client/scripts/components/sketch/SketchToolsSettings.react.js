import React, { Component, PropTypes } from "react";
import className                       from "classnames";
import ReactSVG                        from "react-svg";
import SketchConstants                 from "../../constants/SketchConstants";

export default class SketchToolsSettings extends Component {
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

    setStrokeSize = event => {
        const tool = this.props.selectedTool;
        const size = parseInt( event.target.value, 0 ) || 1;

        this.props.setStrokeSize( tool, size );
    }

    setArrow = event => {
        const tool = this.props.selectedTool;
        const val  = event.target.checked;

        this.props.setArrow( tool, val );
    }

    setDashed = event => {
        const tool = this.props.selectedTool;
        const val  = event.target.checked;

        this.props.setDashed( tool, val );
    }

    setFont = font => {
        this.props.setFontName( this.props.selectedTool, font );
    }

    toggleBold = () => {
        this.props.toggleBold( this.props.selectedTool );
    }

    toggleItalic = () => {
        this.props.toggleItalic( this.props.selectedTool );
    }

    toggleUnderlined = () => {
        this.props.toggleUnderlined( this.props.selectedTool );
    }

    renderBrushSettings() {
        return (
            <div className="geometry-section">
                <div className="geometry-section-title">Sizes</div>
                <div className="geometry-section-content">
                    <div className="qilin-input-container">
                        <label className="qilin-label">Brush size</label>
                        <input className="qilin-input is-small"
                               type="number"
                               min={1}
                               value={this.props[ SketchConstants.SKETCH_BRUSH ].strokeSize}
                               onChange={this.setStrokeSize}
                        />
                    </div>
                </div>
            </div>
        );
    }

    renderEraserSettings() {
        return (
            <div className="geometry-section">
                <div className="geometry-section-title">Sizes</div>
                <div className="geometry-section-content">
                    <div className="qilin-input-container">
                        <label className="qilin-label">Eraser size</label>
                        <input className="qilin-input is-small"
                               type="number"
                               min={1}
                               value={this.props[ SketchConstants.SKETCH_ERASER ].strokeSize}
                               onChange={this.setStrokeSize}
                        />
                    </div>
                </div>
            </div>
        );
    }

    renderLineSettings() {
        return (
            <div>
                <div className="geometry-section">
                    <div className="geometry-section-title">Sizes</div>
                    <div className="geometry-section-content">
                        <div className="qilin-input-container">
                            <label className="qilin-label">Line size</label>
                            <input className="qilin-input is-small"
                                   type="number"
                                   min={1}
                                   value={this.props[ SketchConstants.SKETCH_LINE ].strokeSize}
                                   onChange={this.setStrokeSize}
                            />
                        </div>
                    </div>
                </div>

                <div className="geometry-section">
                    <div className="geometry-section-title">Styles</div>
                    <div className="geometry-section-content">
                        <div className="qilin-radio-container">
                            <input className="qilin-radio"
                                   type="checkbox"
                                   checked={this.props[ SketchConstants.SKETCH_LINE ].isArrow}
                                   onChange={this.setArrow}
                            />
                            <label className="qilin-label">is arrow</label>
                        </div>

                        <div className="qilin-radio-container">
                            <input className="qilin-radio"
                                   type="checkbox"
                                   checked={this.props[ SketchConstants.SKETCH_LINE ].isDashed}
                                   onChange={this.setDashed}
                            />
                            <label className="qilin-label">is dashed</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderMultilineSettings() {
        return (
            <div className="geometry-section">
                <div className="geometry-section-title">Sizes</div>
                <div className="geometry-section-content">
                    <div className="qilin-input-container">
                        <label className="qilin-label">Line size</label>
                        <input className="qilin-input is-small"
                               type="number"
                               min={1}
                               value={this.props[ SketchConstants.SKETCH_MULTILINE ].strokeSize}
                               onChange={this.setStrokeSize}
                        />
                    </div>
                </div>
            </div>
        );
    }

    renderEllipseSettings() {
        return (
            <div className="geometry-section">
                <div className="geometry-section-title">Sizes</div>
                <div className="geometry-section-content">
                    <div className="qilin-input-container">
                        <label className="qilin-label">Line size</label>
                        <input className="qilin-input is-small"
                               type="number"
                               min={1}
                               value={this.props[ SketchConstants.SKETCH_ELLIPSE ].strokeSize}
                               onChange={this.setStrokeSize}
                        />
                    </div>
                </div>
            </div>
        );
    }

    renderRectangleSettings() {
        return (
            <div className="geometry-section">
                <div className="geometry-section-title">Sizes</div>
                <div className="geometry-section-content">
                    <div className="qilin-input-container">
                        <label className="qilin-label">Line size</label>
                        <input className="qilin-input is-small"
                               type="number"
                               min={1}
                               value={this.props[ SketchConstants.SKETCH_RECTANGLE ].strokeSize}
                               onChange={this.setStrokeSize}
                        />
                    </div>
                </div>
            </div>
        );
    }

    renderTextSettings() {
        const ia = "is-active";
        const bc = "geometry-section-icon qilin-panel";

        const bold       = className( bc, { [ ia ] : this.props[ SketchConstants.SKETCH_TEXT ].isBold } );
        const italic     = className( bc, { [ ia ] : this.props[ SketchConstants.SKETCH_TEXT ].isItalic } );
        const underlined = className( bc, { [ ia ] : this.props[ SketchConstants.SKETCH_TEXT ].isUnderlined } );

        return (
            <div>
                <div className="geometry-section">
                    <div className="geometry-section-title">Sizes</div>
                    <div className="geometry-section-content">
                        <div className="qilin-input-container">
                            <label className="qilin-label">Font size</label>
                            <input className="qilin-input is-small"
                                   type="number"
                                   min={1}
                                   value={this.props[ SketchConstants.SKETCH_TEXT ].strokeSize}
                                   onChange={this.setStrokeSize}
                            />
                        </div>
                    </div>
                </div>

                <div className="geometry-section">
                    <div className="geometry-section-title">Styles</div>
                    <div className="geometry-section-content">
                        <div className="geometry-group qilin-panel">
                            <div className={bold} onClick={this.toggleBold}>
                                <ReactSVG className="qilin-icon" path="images/icons/editor/bold.svg" />
                            </div>

                            <div className={italic} onClick={this.toggleItalic}>
                                <ReactSVG className="qilin-icon" path="images/icons/editor/italic.svg" />
                            </div>

                            <div className={underlined} onClick={this.toggleUnderlined}>
                                <ReactSVG className="qilin-icon" path="images/icons/editor/underlined.svg" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="geometry-section">
                    <div className="geometry-section-title">Fonts</div>
                    <div className="geometry-section-content">
                        <div className="geometry-group qilin-panel">
                            <div className="geometry-section-icon qilin-panel" onClick={() => this.setFont( "Monaco" )}>
                                <div className="qilin-icon" style={{ fontFamily : "Monaco" }}>Aa</div>
                            </div>

                            <div className="geometry-section-icon qilin-panel" onClick={() => this.setFont( "Courier New" )}>
                                <div className="qilin-icon" style={{ fontFamily : "Courier New" }}>Aa</div>
                            </div>

                            <div className="geometry-section-icon qilin-panel" onClick={() => this.setFont( "Verdana" )}>
                                <div className="qilin-icon" style={{ fontFamily : "Verdana" }}>Aa</div>
                            </div>
                        </div>

                        <div className="geometry-group qilin-panel">
                            <div className="geometry-section-icon qilin-panel" onClick={() => this.setFont( "Copperplate" )}>
                                <div className="qilin-icon" style={{ fontFamily : "Copperplate" }}>Aa</div>
                            </div>

                            <div className="geometry-section-icon qilin-panel" onClick={() => this.setFont( "Papyrus" )}>
                                <div className="qilin-icon" style={{ fontFamily : "Papyrus" }}>Aa</div>
                            </div>

                            <div className="geometry-section-icon qilin-panel" onClick={() => this.setFont( "Times New Roman" )}>
                                <div className="qilin-icon" style={{ fontFamily : "Times New Roman" }}>Aa</div>
                            </div>
                        </div>

                        <div className="geometry-group qilin-panel">
                            <div className="geometry-section-icon qilin-panel" onClick={() => this.setFont( "Palatino" )}>
                                <div className="qilin-icon" style={{ fontFamily : "Palatino" }}>Aa</div>
                            </div>

                            <div className="geometry-section-icon qilin-panel" onClick={() => this.setFont( "Helvetica" )}>
                                <div className="qilin-icon" style={{ fontFamily : "Helvetica" }}>Aa</div>
                            </div>

                            <div className="geometry-section-icon qilin-panel" onClick={() => this.setFont( "Gill Sans" )}>
                                <div className="qilin-icon" style={{ fontFamily : "Gill Sans" }}>Aa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let settings = null;

        switch ( this.props.selectedTool ) {
            case SketchConstants.SKETCH_BRUSH:
                settings = this.renderBrushSettings();
                break;

            case SketchConstants.SKETCH_ERASER:
                settings = this.renderEraserSettings();
                break;

            case SketchConstants.SKETCH_LINE:
                settings = this.renderLineSettings();
                break;

            case SketchConstants.SKETCH_MULTILINE:
                settings = this.renderMultilineSettings();
                break;

            case SketchConstants.SKETCH_ELLIPSE:
                settings = this.renderEllipseSettings();
                break;

            case SketchConstants.SKETCH_RECTANGLE:
                settings = this.renderRectangleSettings();
                break;

            case SketchConstants.SKETCH_TEXT:
                settings = this.renderTextSettings();
                break;
        }

        return (
            <div className="geometry-right qilin-panel">
                {settings}
            </div>
        );
    }
}
