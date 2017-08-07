export function click( name, callback ) {
    const chooser = document.querySelector( name );

    chooser.addEventListener( "change", callback, false );
    chooser.click();
}
