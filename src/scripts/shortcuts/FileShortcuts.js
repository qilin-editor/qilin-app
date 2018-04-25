// @flow
import path from "path";
import { editor } from "../stores";
import { triggerButton, writeFile, readFile } from "../utils/FileUtils";
import { getMarkdown } from "../utils/MarkdownUtils";

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

  const ext = path.extname(e.target.value);
  const str = getContentByExtension(ext, editor.content);

  writeFile(editor.path, str)
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
    const ext = path.extname(e.target.value);
    const str = getContentByExtension(ext, editor.content);

    writeFile(e.target.value, str)
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

export function getContentByExtension(ext: string, content: string): string {
  switch (ext) {
    case ".html":
      return getAsHTML(content);
    default:
      return getAsMarkdown(content);
  }
}

/**
 * Parses content and returns a valid markdown text.
 *
 * @todo    Parse HTML to markdown
 *
 * @param   {string}  content
 * @return  {string}
 */
export function getAsMarkdown(content: string): string {
  return editor.content;
}

/**
 * Parses content and returns a valid HTML text.
 *
 * @todo    Implement styles once ThemeStore ready
 *
 * @param   {string}  content
 * @return  {string}
 */
export function getAsHTML(content: string): string {
  const title = `Qilin – ${editor.path}`;
  const style = "";
  const html = getMarkdown({
    html: true,
    linkify: true,
    typography: true
  }).render(content);

  return `
    <DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>

        <style>
          .content { max-width: 1200px; margin: 0 auto; }
          ${style}
        </style>
      </head>

      <body>
        <div class="content">
          ${html}
        </div>
      </body>
    </html>
  `;
}
