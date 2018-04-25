// @flow
import fs from "fs";
import { promisify } from "util";

/**
 * Triggers a click event on input tag, and use the change event to capture the
 * file path.
 *
 * @see     https://github.com/nwjs/nw.js/wiki/File-dialogs
 * @see     https://github.com/nwjs/nw.js/wiki/File-dialogs#how-to-open-a-file-dialog
 *
 * @param   {string}    name
 * @param   {Function}  callback
 * @return  {void}
 */
export function triggerButton(name: string, callback: Function): void {
  const chooser = document.querySelector(name);

  chooser.addEventListener("change", callback, false);
  chooser.click();
}

export const writeFile = promisify(fs.writeFile);
export const readFile = promisify(fs.readFile);
