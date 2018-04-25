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
 * Saves content to its file. Prompts a "Save as" dialog if content is not
 * assigned to a file. Content will be exported based on file extension.
 *
 * @param   {Event}   event
 * @param   {Object}  ctx
 * @return  {void}
 * @async
 */
export async function saveFile(event: Event, ctx: Object): void {
  event.preventDefault();
  event.stopPropagation();

  if (!editor.path) {
    return saveFileAs(event, ctx);
  }

  try {
    const ext = path.extname(editor.path);
    const str = await getContentForExtension(ext, editor.content);

    // If output is a boolean, that means that the file has already been saved
    // by another method (i.e. Chromium internals when saving as PDF):
    if (typeof str !== "boolean") {
      await writeFile(editor.path, str);
    }

    editor.saved = true;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Prompts a "Save as" dialog and saves content in the selected file.
 *
 * @param   {Event}   event
 * @param   {Object}  ctx
 * @return  {void}
 */
export function saveFileAs(event: Event, ctx: Object): void {
  event.preventDefault();
  event.stopPropagation();

  triggerButton("#saveFile", e => {
    editor.changePath(e.target.value);
    editor.changeContent(editor.content);

    saveFile(event, ctx);
  });
}

/**
 * Returns transformed content based on file extension.
 *
 * @param   {string}  ext               File extension
 * @param   {string}  content           File content
 * @return  {string|boolean}
 */
export function getContentForExtension(
  ext: string,
  content: string
): Promise<string | boolean> {
  switch (ext) {
    case ".pdf":
      return exportAsPDF(content);
    case ".html":
      return exportAsHTML(content);
    default:
      return exportAsMarkdown(content);
  }
}

/**
 * Parses file's content and returns a valid markdown text if possible.
 *
 * @todo    Parse HTML to Markdown
 * @todo    Parse PDF to Markdown (if possible)
 *
 * @param   {string}  content
 * @return  {Promise<string>}
 * @async
 */
export async function exportAsMarkdown(content: string): string {
  return editor.content;
}

/**
 * Parses content and returns a valid HTML text.
 *
 * @todo    Implement styles once ThemeStore ready
 * @todo    Use local Normalize and KaTeX stylesheets (when offline or slow con)
 *
 * @param   {string}  content
 * @return  {Promise<string>}
 * @async
 */
export async function exportAsHTML(content: string): string {
  const style = "";
  const html = getMarkdown({
    html: true,
    linkify: true,
    typography: true
  }).render(content);

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Qilin</title>

        <meta charset="utf-8" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" />

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
  `.trim();
}

/**
 * Exports a file as PDF.
 *
 * @todo    Remove setTimeout, use something more optimal
 *
 * @param   {string}  content
 * @return  {Promise<boolean>}
 */
export function exportAsPDF(content: string): Promise<boolean> {
  return new Promise(async (resolve, reject) => {
    const html = await exportAsHTML(content);
    const opts = { show: false };

    // Save file in a temporary location:
    await writeFile("temp.html", html);

    nw.Window.open("temp.html", opts, instance => {
      const win = instance.window;
      const doc = win.document;

      doc.addEventListener("readystatechange", event => {
        if (event.target.readyState === "complete") {
          // NOTE: would be better if we knew when fonts are loaded
          win.setTimeout(() => {
            instance.print({ autoprint: true, pdf_path: editor.path });
            win.close();

            resolve(true);
          }, 1000);
        }
      });
    });
  });
}
