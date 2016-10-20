import React, { Component, PropTypes } from "react";
import { findDOMNode }                 from "react-dom";
import ReactSVG                        from "react-svg/dist/react-svg";
import { ChromePicker }                from "react-color";
import Tooltip                         from "react-tooltip";
import SketchConstants                 from "../../constants/SketchConstants";

export default class SketchStateSettings extends Component {
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

    state = {
        [ SketchConstants.SKETCH_PICKER_1 ] : false,
        [ SketchConstants.SKETCH_PICKER_1 ] : false,
    }

    openPicker( picker ) {
        this.setState( {
            [ picker ] : true,
        } );

        Tooltip.show(
            findDOMNode( this.refs[ picker ] )
        );
    }

    hidePicker( picker ) {
        this.setState( {
            [ picker ] : false,
        } );

        Tooltip.hide(
            findDOMNode( this.refs[ picker ] )
        );
    }

    togglePicker( picker ) {
        const is1Open = this.state[ SketchConstants.SKETCH_PICKER_1 ];
        const is2Open = this.state[ SketchConstants.SKETCH_PICKER_2 ];

        this.hidePicker( SketchConstants.SKETCH_PICKER_1 );
        this.hidePicker( SketchConstants.SKETCH_PICKER_2 );

        switch ( picker ) {
            case SketchConstants.SKETCH_PICKER_1:
                return is1Open ? null : this.openPicker( SketchConstants.SKETCH_PICKER_1 );

            case SketchConstants.SKETCH_PICKER_2:
                return is2Open ? null : this.openPicker( SketchConstants.SKETCH_PICKER_2 );
        }
    }

    render() {
        return (
            <div className="geometry-left qilin-panel">
                <Tooltip id="picker1" class="geometry-color-picker" event="none" place="right" effect="solid" offset={{ bottom : -92, right : 18 }}>
                    <ChromePicker
                        color={this.props[ SketchConstants.SKETCH_PICKER_1 ]}
                        onChange={color => this.props.setColor( SketchConstants.SKETCH_PICKER_1, color )}
                    />
                </Tooltip>

                <Tooltip id="picker2" class="geometry-color-picker" event="none" place="right" effect="solid" offset={{ bottom : -108, right : 20 }}>
                    <ChromePicker
                        color={this.props[ SketchConstants.SKETCH_PICKER_2 ]}
                        onChange={color => this.props.setColor( SketchConstants.SKETCH_PICKER_2, color )}
                    />
                </Tooltip>

                <div className="geometry-group qilin-panel">
                    <div className="geometry-icon qilin-panel" onClick={() => this.props.save()}>
                        <ReactSVG className="qilin-icon" path="images/icons/editor/save.svg" />
                    </div>
                </div>

                <div className="geometry-group qilin-panel">
                    <div className="geometry-color qilin-panel" style={{ backgroundColor : this.props[ SketchConstants.SKETCH_PICKER_1 ] }} data-tip data-for="picker1" ref={SketchConstants.SKETCH_PICKER_1} onClick={() => this.togglePicker( SketchConstants.SKETCH_PICKER_1 )} />
                    <div className="geometry-color qilin-panel" style={{ backgroundColor : this.props[ SketchConstants.SKETCH_PICKER_2 ] }} data-tip data-for="picker2" ref={SketchConstants.SKETCH_PICKER_2} onClick={() => this.togglePicker( SketchConstants.SKETCH_PICKER_2 )} />
                </div>
            </div>
        );
    }
}
