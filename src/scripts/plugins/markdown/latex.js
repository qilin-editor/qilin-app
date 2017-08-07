import asciimath2latex  from "asciimath-to-latex";
import katex            from "katex";

const mathBlock = code => {
    let tex = "";

    // Consecutive new lines means a new formula
    code.split( /(?:\n\s*){2,}/ ).forEach( line => {
        try {
            tex += katex.renderToString( line.trim(), { displayMode: true } );
        } catch ( err ) {
            tex += `<pre>${err}</pre>`;
        }
    } );

    return `<div>${tex}</div>`;
};

export default function ( md ) {
    const temp1 = md.renderer.rules.code_inline.bind( md.renderer.rules );
    const temp2 = md.renderer.rules.fence.bind( md.renderer.rules );

    // Inline math:
    md.renderer.rules.code_inline = ( tokens, idx, options, env, slf ) => {
        let code = tokens[ idx ].content;

        if ( code.startsWith( "math" ) ) {
            code = `katex ${asciimath2latex( code.substr( 4, code.length - 2 ) )}`;
        }

        // inline math
        if ( code.startsWith( "katex" ) ) {
            code = code.substr( 5, code.length - 2 );

            try {
                return katex.renderToString( code );
            } catch ( err ) {
                return `<code>${err}</code>`;
            }
        }

        return temp1( tokens, idx, options, env, slf );
    };

    // Fenced math block
    md.renderer.rules.fence = ( tokens, idx, options, env, slf ) => {
        const token = tokens[ idx ];
        const code  = token.content.trim();

        if ( token.info === "katex" ) {
            return mathBlock( code );
        }

        if ( token.info === "math" ) {
            return mathBlock( code.split( /(?:\n\s*){2,}/ ).map( item => asciimath2latex( item ) ).join( "\n\n" ) );
        }

        return temp2( tokens, idx, options, env, slf );
    };
}
