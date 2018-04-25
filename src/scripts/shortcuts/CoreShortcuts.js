// @flow
import manifest from "../../../package";

/**
 * Opens a new Qilin application in a separate render process.
 *
 * @see     http://docs.nwjs.io/en/latest/References/Manifest%20Format/#window-subfields
 * @see     http://docs.nwjs.io/en/latest/References/Window/#windowopenurl-options-callback
 *
 * @param   {Event}   event
 * @param   {Object}  ctx
 * @return  {void}
 */
export function newWindow(event: Event, ctx: Object): void {
  event.preventDefault();
  event.stopPropagation();

  nw.Window.open("qpm/src/index.html", {
    ...manifest.window,
    inject_js_start: manifest.inject_js_start,
    inject_js_end: manifest.inject_js_end,
    new_instance: true
  });
}
