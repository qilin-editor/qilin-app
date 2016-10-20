import uuid                 from "uuid";
import React, { Component } from "react";
import Canvas, { tools }    from "literallycanvas/lib/js/literallycanvas-core";
import SketchConstants      from "../../constants/SketchConstants";
import SketchActions        from "../../actions/SketchActions";
import SketchTools          from "./SketchTools.react";
import SketchToolsSettings  from "./SketchToolsSettings.react";
import SketchStateSettings  from "./SketchStateSettings.react";

export default class Sketch extends Component {
    state = {
        selectedTool : null,

        [ SketchConstants.SKETCH_PICKER_1 ] : "#000",
        [ SketchConstants.SKETCH_PICKER_2 ] : "#fff",
    }

    componentDidMount() {
        this.canvas = this.refs.canvas;
        this.drawer = Canvas.init( this.canvas );

        this.tools = {
            [ SketchConstants.SKETCH_LINE ]      : new tools.Line( this.drawer ),
            [ SketchConstants.SKETCH_TEXT ]      : new tools.Text( this.drawer ),
            [ SketchConstants.SKETCH_BRUSH ]     : new tools.Pencil( this.drawer ),
            [ SketchConstants.SKETCH_ERASER ]    : new tools.Eraser( this.drawer ),
            [ SketchConstants.SKETCH_ELLIPSE ]   : new tools.Ellipse( this.drawer ),
            [ SketchConstants.SKETCH_MULTILINE ] : new tools.Polygon( this.drawer ),
            [ SketchConstants.SKETCH_RECTANGLE ] : new tools.Rectangle( this.drawer ),
        };

        for ( const tool in this.tools ) {
            this.setState( {
                [ tool ] : {
                    strokeSize   : 5,
                    isDashed     : false,
                    isArrow      : false,
                    isBold       : false,
                    isItalic     : false,
                    isUnderlined : false,
                    fontName     : "Monospace",
                },
            } );
        }

        setTimeout( () => this.setTool( SketchConstants.SKETCH_BRUSH ), 0 );
        this.forceUpdate();
    }

    save = () => {
        const name   = uuid.v4();
        const state  = this.drawer.getSnapshot();
        const canvas = this.drawer.getImage();

        state.name = name;

        SketchActions.requestSaveImage( name, JSON.stringify( state ), canvas );
    }

    setTool = tool => {
        this.setState( {
            selectedTool : tool,
        } );

        this.drawer.setTool( this.tools[ tool ] );

        // Set custom settings:
        this.setDashed( tool, this.state[ tool ].isDashed );
        this.setArrow( tool, this.state[ tool ].isArrow );

        // Triger tool state:
        this.drawer.trigger( "setStrokeWidth", this.state[ tool ].strokeSize );
    }

    setColor = ( picker, color ) => {
        this.setState( {
            [ picker ] : color.hex,
        } );

        switch ( picker ) {
            case SketchConstants.SKETCH_PICKER_1:
                return this.drawer.setColor( "primary", color.hex );

            case SketchConstants.SKETCH_PICKER_2:
                return this.drawer.setColor( "secondary", color.hex );
        }
    }

    setStrokeSize = ( tool, strokeSize ) => {
        this.setState( {
            [ tool ] : Object.assign( this.state[ tool ], { strokeSize } ),
        } );

        this.setFont(
            Object.assign( this.state[ tool ], { strokeSize } )
        );

        this.drawer.trigger( "setStrokeWidth", strokeSize );
    }

    setDashed = ( tool, dashed ) => {
        this.setState( {
            [ tool ] : Object.assign( this.state[ tool ], {
                isDashed : dashed,
            } ),
        } );

        this.drawer.tool.isDashed = dashed;
    }

    setArrow = ( tool, arrow ) => {
        this.setState( {
            [ tool ] : Object.assign( this.state[ tool ], {
                isArrow : arrow,
            } ),
        } );

        this.drawer.tool.hasEndArrow = arrow;
    }

    setFont = ( { isBold, isItalic, isUnderlined, strokeSize, fontName } ) => {
        this.drawer.tool.font  = "";
        this.drawer.tool.font += isBold       ? "bold "       : "";
        this.drawer.tool.font += isItalic     ? "italic "     : "";
        this.drawer.tool.font += isUnderlined ? "underlined " : "";
        this.drawer.tool.font += `${strokeSize}px `;
        this.drawer.tool.font += `${fontName} `;
    }

    setFontName = ( tool, fontName ) => {
        this.setState( {
            [ tool ] : Object.assign( this.state[ tool ], { fontName } ),
        } );

        this.setFont(
            Object.assign( this.state[ tool ], { fontName } )
        );
    }

    toggleBold = tool => {
        const isBold = ! this.state[ tool ].isBold;

        this.setState( {
            [ tool ] : Object.assign( this.state[ tool ], { isBold } ),
        } );

        this.setFont(
            Object.assign( this.state[ tool ], { isBold } )
        );
    }

    toggleItalic = tool => {
        const isItalic = ! this.state[ tool ].isItalic;

        this.setState( {
            [ tool ] : Object.assign( this.state[ tool ], { isItalic } ),
        } );

        this.setFont(
            Object.assign( this.state[ tool ], { isItalic } )
        );
    }

    toggleUnderlined = tool => {
        const isUnderlined = ! this.state[ tool ].isUnderlined;

        this.setState( {
            [ tool ] : Object.assign( this.state[ tool ], { isUnderlined } ),
        } );

        this.setFont(
            Object.assign( this.state[ tool ], { isUnderlined } )
        );
    }

    render() {
        return (
            <div className="modal-content qilin-panel">
                <div className="geometry-container">
                    <div className="geometry-content qilin-panel">
                        <div ref="canvas" className="geometry-canvas qilin-panel" />

                        <SketchToolsSettings
                            {...this.state}
                            save={this.save}
                            drawer={this.drawer}
                            setTool={this.setTool}
                            setColor={this.setColor}
                            setArrow={this.setArrow}
                            setDashed={this.setDashed}
                            setStrokeSize={this.setStrokeSize}
                            setFontName={this.setFontName}
                            toggleBold={this.toggleBold}
                            toggleItalic={this.toggleItalic}
                            toggleUnderlined={this.toggleUnderlined}
                        />

                        <SketchStateSettings
                            {...this.state}
                            save={this.save}
                            drawer={this.drawer}
                            setTool={this.setTool}
                            setColor={this.setColor}
                            setArrow={this.setArrow}
                            setDashed={this.setDashed}
                            setStrokeSize={this.setStrokeSize}
                            setFontName={this.setFontName}
                            toggleBold={this.toggleBold}
                            toggleItalic={this.toggleItalic}
                            toggleUnderlined={this.toggleUnderlined}
                        />
                    </div>

                    <SketchTools
                        {...this.state}
                        save={this.save}
                        drawer={this.drawer}
                        setTool={this.setTool}
                        setColor={this.setColor}
                        setArrow={this.setArrow}
                        setDashed={this.setDashed}
                        setStrokeSize={this.setStrokeSize}
                        setFontName={this.setFontName}
                        toggleBold={this.toggleBold}
                        toggleItalic={this.toggleItalic}
                        toggleUnderlined={this.toggleUnderlined}
                    />
                </div>
            </div>
        );
    }
}
