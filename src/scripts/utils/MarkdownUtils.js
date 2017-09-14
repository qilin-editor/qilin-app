import Markdown from "markdown-it";
import hljs from "highlight.js";

export function getMarkdown(options = {}) {
    const markdown = new Markdown({
        html: true,
        linkify: true,
        typography: true,
        highlight: (str, lang) => {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (error) { /* … */ }
            }

            // Use external default escaping:
            return "";
        },
        ...options,
    });

    markdown.use(require("markdown-it-sub"));
    markdown.use(require("markdown-it-sup"));
    markdown.use(require("markdown-it-abbr"));
    markdown.use(require("markdown-it-emoji"));
    markdown.use(require("markdown-it-anchor"));
    markdown.use(require("markdown-it-task-lists"));
    markdown.use(require("markdown-it-table-of-contents"));
    markdown.use(require("markdown-it-block-embed"), { filterUrl: url => `http://${url}` });
    markdown.use(require("markdown-it-maths"));

    return markdown;
}
