// @flow
import { editor } from "../stores";
import { triggerButton, writeFile, readFile } from "../utils/FileUtils";

/**
 * Handles selected file from the file dialog. Updates Qilin stores.
 *
 * @param   {Event}   event
 * @param   {Object}  ctx
 * @return  {void}
 */
export function openFile(event: Event, ctx: Object): void {
  event.preventDefault();
  event.stopPropagation();

  triggerButton("#openFile", e => {
    readFile(e.target.value, "utf8")
      .then(content => {
        editor.changePath(e.target.value);
        editor.changeContent(content);
        editor.saved = true;
      })
      .catch(err => {
        console.error(err);
      });
  });
}

/**
 * Saves content to an already existing file.
 *
 * @param   {Event}   event
 * @param   {Object}  ctx
 * @return  {void}
 */
export function saveFile(event: Event, ctx: Object): void {
  event.preventDefault();
  event.stopPropagation();

  if (!editor.path) {
    return saveFileAs(event, ctx);
  }

  writeFile(editor.path, editor.content)
    .then(() => {
      editor.saved = true;
    })
    .catch(err => {
      console.error(err);
    });
}

/**
 * Saves content to a new file.
 *
 * @param   {Event}   event
 * @param   {Object}  ctx
 * @return  {void}
 */
export function saveFileAs(event: Event, ctx: Object): void {
  event.preventDefault();
  event.stopPropagation();

  triggerButton("#saveFile", e => {
    writeFile(e.target.value, editor.content)
      .then(() => {
        editor.changePath(e.target.value);
        editor.changeContent(editor.content);
        editor.saved = true;
      })
      .catch(err => {
        console.error(err);
      });
  });
}
