import uuid                     from "uuid";
import React, { Component }     from "react";
import { findDOMNode }          from "react-dom";
import { ChromePicker }         from "react-color";
import Tooltip                  from "react-tooltip";
import ReactSVG                 from "react-svg/dist/react-svg";
import className                from "classnames";
import LC, { tools as Tools }   from "literallycanvas/lib/js/literallycanvas-core";
import GC                       from "../../constants/GeometryConstants";

import GeoemtryConstants      from "../../constants/GeometryConstants";
import GeometryActions        from "../../actions/GeometryActions";
import GeometryStore          from "../../stores/GeometryStore";

export default class GeometryModal extends Component {
    state = {
        selectedTool : C.GEOMETRY_BRUSH,
        strokeSize   : 5,

        primaryColor   : "#000",
        secondaryColor : "#fff",

        isPrimaryColorOpen   : false,
        isSecondaryColorOpen : false,
    }

    componentDidMount() {
        // Initialise drawer once modal did mount:
        this.drawer = LC.init( this.refs.lc );

        this.tools = {
            [ GC.GEOMETRY_LINE ]      : new Tools.Line( this.drawer ),
            [ GC.GEOMETRY_TEXT ]      : new Tools.Text( this.drawer ),
            [ GC.GEOMETRY_BRUSH ]     : new Tools.Pencil( this.drawer ),
            [ GC.GEOMETRY_ERASER ]    : new Tools.Eraser( this.drawer ),
            [ GC.GEOMETRY_ELLIPSE ]   : new Tools.Ellipse( this.drawer ),
            [ GC.GEOMETRY_MULTILINE ] : new Tools.Polygon( this.drawer ),
            [ GC.GEOMETRY_RECTANGLE ] : new Tools.Rectangle( this.drawer ),
        };
    }

    save = () => {
        const name   = uuid.v4();
        const state  = this.drawer.getSnapshot();
        const canvas = this.drawer.getImage();

        state.name = name;

        GeometryActions.requestSaveImage( name, JSON.stringify( state ), canvas );
    }

    setTool = ( event, tool ) => {
        this.drawer.setTool( this.tools[ tool ] );
        this.drawer.trigger( "setStrokeWidth", this.state.strokeSize );
        this.setState( { selectedTool : tool } );
    }

    setStrokeSize = event => {
        const strokeWidth = parseInt( event.target.value, 0 );

        this.drawer.trigger( "setStrokeWidth", strokeWidth );
        this.setState( { strokeSize : strokeWidth } );
    }

    setPrimaryColor = color => {
        this.drawer.setColor( "primary", color.hex );
        this.setState( { primaryColor : color.hex } );
    }

    setSecondaryColor = color => {
        this.drawer.setColor( "secondary", color.hex );
        this.setState( { secondaryColor : color.hex } );
    }

    togglePrimaryColorPicker = () => {
        if ( this.state.isPrimaryColorOpen ) {
            Tooltip.hide( findDOMNode( this.refs.primaryColorButton ) );
        } else {
            Tooltip.show( findDOMNode( this.refs.primaryColorButton ) );
            Tooltip.hide( findDOMNode( this.refs.secondaryColorButton ) );
        }

        this.setState( {
            isPrimaryColorOpen : ! this.state.isPrimaryColorOpen,
        } );
    }

    toggleSecondaryColorPicker = () => {
        this.setState( {
            isSecondaryColorOpen : ! this.state.isSecondaryColorOpen,
        } );

        if ( this.state.isSecondaryColorOpen ) {
            Tooltip.hide( findDOMNode( this.refs.secondaryColorButton ) );
        } else {
            Tooltip.hide( findDOMNode( this.refs.primaryColorButton ) );
            Tooltip.show( findDOMNode( this.refs.secondaryColorButton ) );
        }
    }

    render() {
        const brushButton = className( "geometry-menu-button qilin-panel", {
            "is-active" : this.state.selectedTool === GC.GEOMETRY_BRUSH,
        } );

        const eraserButton = className( "geometry-menu-button qilin-panel", {
            "is-active" : this.state.selectedTool === GC.GEOMETRY_ERASER,
        } );

        const lineButton = className( "geometry-menu-button qilin-panel", {
            "is-active" : this.state.selectedTool === GC.GEOMETRY_LINE,
        } );

        const multilineButton = className( "geometry-menu-button qilin-panel", {
            "is-active" : this.state.selectedTool === GC.GEOMETRY_MULTILINE,
        } );

        const ellipseButton = className( "geometry-menu-button qilin-panel", {
            "is-active" : this.state.selectedTool === GC.GEOMETRY_ELLIPSE,
        } );

        const rectangleButton = className( "geometry-menu-button qilin-panel", {
            "is-active" : this.state.selectedTool === GC.GEOMETRY_RECTANGLE,
        } );

        const textButton = className( "geometry-menu-button qilin-panel", {
            "is-active" : this.state.selectedTool === GC.GEOMETRY_TEXT,
        } );

        return (
            <div className="modal-content qilin-panel">
                <Tooltip
                    id="primaryColor"
                    class="geometry-color-picker"

                    event="none"
                    eventOff="none"

                    place="right"
                    effect="solid"
                    offset={{ bottom : -92, right : 18 }}
                >
                    <ChromePicker
                        color={this.state.primaryColor}
                        onChange={this.setPrimaryColor}
                        onChangeComplete={this.setPrimaryColor}
                    />
                </Tooltip>

                <Tooltip
                    id="secondaryColor"
                    class="geometry-color-picker"

                    event="none"
                    eventOff="none"

                    place="right"
                    effect="solid"
                    offset={{ bottom : -108, right : 20 }}
                >
                    <ChromePicker
                        color={this.state.secondaryColor}
                        onChange={this.setSecondaryColor}
                        onChangeComplete={this.setSecondaryColor}
                    />
                </Tooltip>

                <div className="geometry-container">
                    <div className="geometry-menu qilin-panel">
                        <div className="geometry-menu-group qilin-panel">
                            <div className={brushButton} onClick={event => this.setTool( event, GC.GEOMETRY_BRUSH )}>
                                <ReactSVG className="qilin-icon" path="images/icons/editor/brush.svg" />
                            </div>

                            <div className={eraserButton} onClick={event => this.setTool( event, GC.GEOMETRY_ERASER )}>
                                <ReactSVG className="qilin-icon" path="images/icons/editor/erase.svg" />
                            </div>
                        </div>

                        <div className="geometry-menu-group qilin-panel">
                            <div className={lineButton} onClick={event => this.setTool( event, GC.GEOMETRY_LINE )}>
                                <ReactSVG className="qilin-icon" path="images/icons/editor/line.svg" />
                            </div>

                            <div className={multilineButton} onClick={event => this.setTool( event, GC.GEOMETRY_MULTILINE )}>
                                <ReactSVG className="qilin-icon" path="images/icons/editor/multiline.svg" />
                            </div>

                            <div className={ellipseButton} onClick={event => this.setTool( event, GC.GEOMETRY_ELLIPSE )}>
                                <ReactSVG className="qilin-icon" path="images/icons/editor/circle.svg" />
                            </div>

                            <div className={rectangleButton} onClick={event => this.setTool( event, GC.GEOMETRY_RECTANGLE )}>
                                <ReactSVG className="qilin-icon" path="images/icons/editor/square.svg" />
                            </div>

                            <div className={textButton} onClick={event => this.setTool( event, GC.GEOMETRY_TEXT )}>
                                <ReactSVG className="qilin-icon" path="images/icons/editor/text.svg" />
                            </div>
                        </div>

                        <div className="geometry-menu-group qilin-panel">
                            <div className="geometry-menu-button qilin-panel" onClick={() => this.drawer.clear()}>
                                <ReactSVG className="qilin-icon" path="images/icons/editor/delete.svg" />
                            </div>

                            <div className="geometry-menu-button qilin-panel" onClick={() => this.drawer.undo()}>
                                <ReactSVG className="qilin-icon" path="images/icons/editor/undo.svg" />
                            </div>

                            <div className="geometry-menu-button qilin-panel" onClick={() => this.drawer.redo()}>
                                <ReactSVG className="qilin-icon" path="images/icons/editor/redo.svg" />
                            </div>
                        </div>
                    </div>

                    <div className="geometry-main qilin-panel">
                        <div className="geometry-submenu qilin-panel">
                            <div className="geometry-menu-group qilin-panel">
                                <div className="geometry-menu-button qilin-panel" onClick={() => this.save()}>
                                    <ReactSVG className="qilin-icon" path="images/icons/editor/save.svg" />
                                </div>
                            </div>

                            <div className="geometry-menu-group qilin-panel">
                                <input className="qilin-range geometry-range" type="range" value={this.state.strokeSize} min="1" max="40" onChange={this.setStrokeSize} />

                                <div
                                    className="geometry-color qilin-panel"
                                    style={{ backgroundColor : this.state.primaryColor }}

                                    data-tip
                                    data-for="primaryColor"

                                    ref="primaryColorButton"

                                    onClick={this.togglePrimaryColorPicker}
                                />

                                <div
                                    className="geometry-color qilin-panel"
                                    style={{ backgroundColor : this.state.secondaryColor }}

                                    data-tip
                                    data-for="secondaryColor"

                                    ref="secondaryColorButton"

                                    onClick={this.toggleSecondaryColorPicker}
                                />
                            </div>
                        </div>

                        <div ref="lc" className="geometry-canvas qilin-panel" />
                    </div>
                </div>
            </div>
        );
    }
}
