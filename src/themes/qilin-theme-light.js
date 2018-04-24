import githubTheme from "typography-theme-github";

// Syntax information for styling editor highlights. This is based on `atom`
// light-syntax. Should be enough in most cases. I haven't found any standards
// for syntax highlighting, so this might change based on our personal needs.
//
// @see https://github.com/atom/one-light-syntax/blob/master/styles/syntax-variables.less
// @see https://github.com/qilin-editor/qilin-components/blob/development/src/components/app/index.js
const syntax = {
  import: "#e696f9",
  snippet: "#f5f4f5",
  comment: "#6b6b8a",
  variable: "#f77ea5",
  constant: "#f77ea5",
  property: "#ffe25b",
  function: "#6cc1fa",
  attribute: "#ffe25b",
  value: "#f5f4f5",
  class: "#e696f9",
  method: "#6cc1fa",
  keyword: "#e696f9",
  tag: "#e696f9"
};

// We use Typography.js for the preview mode. The goal of Typography.js is to
// provide a high-level elegant API for expressing typographic design intent.
//
// @see https://github.com/KyleAMathews/typography.js
// @see https://github.com/KyleAMathews/typography.js#published-typographyjs-themes
const typography = {
  // Base theme to use
  theme: githubTheme,

  // The base font size in pixels
  baseFontSize: "16px",
  // The base line height using the css unitless number
  baseLineHeight: 1.45,

  // The "scale ratio" for the theme. This value is the ratio between the h1
  // font size and the baseFontSize. So if the scale ratio is 2 and the
  // baseFontSize is 16px then the h1 font size is 32px
  scaleRatio: 2,

  // An array of strings specifying the font family stack for headers. Defaults
  // to a system UI font stack. Might be overwritten by themes.
  // headerFontFamily: ["Helvetica", 'sans-serif'],

  // An array of strings specifying the font family stack for the body. Might be
  // overwritten by themes.
  // bodyFontFamily: ["georgia", "serif"],

  // A css color string to be set on headers
  headerColor: "inherit",
  // Specify the font weight for headers
  headerWeight: "bold",

  // A css color string to be set for body text
  bodyColor: "hsl(0,0%,0%,0.8)",
  // Specify the font weight for body text
  bodyWeight: "normal",

  // Specify the font weight for "bold" (b, strong, dt, th) elements
  boldWeight: "bold",

  // TODO force this in store
  includeNormalize: false,

  // Imperative API for directly adding to or overriding auto-generated styles.
  // It's called with a Vertical Rhythm object, the options object, and the
  // algorithmically generated styles.
  //
  // @see https://github.com/KyleAMathews/typography.js#api
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({}),

  // This has the same function signature as overrideStyles but should be used
  // in place of overrideStyles when using a 3rd-party theme so as to not delete
  // the theme's own overrideStyles function.
  //
  // @see https://github.com/KyleAMathews/typography.js#api
  overrideThemeStyles: ({ rhythm }, options, styles) => ({})
};

// Theme information for styling editor components. This is copied verbatim from
// `syntect` and that in turn is derived from TextMate's `.tmTheme` format. Many
// fields may not be used.
//
// @see https://github.com/trishume/syntect/blob/master/src/highlighting/theme.rs
// @see https://github.com/qilin-editor/qilin-components/blob/development/src/components/app/index.js
const theme = {
  // Text color for the view
  foreground: "blue",
  // Backgound color of the view
  background: "red",
  // Border color of the view
  border: "#171727",
  // Color of the caret
  caret: "#f97fa7",
  // Color of the line the caret is in
  lineHighlight: "#2b2b48",
  // Background color of regions matching the current search
  findHighlight: "#00ff00",
  // Text color of regions matching the current search
  findHighlightForeground: "#0000ff",
  // Background color of the gutter
  gutter: "#272740",
  // The color of the line numbers in the gutter
  gutterForeground: "#4c4b66",
  // The background color of selections
  selection: "#3a3960",
  // Text color of the selection regions
  selectionForeground: "#9998b9",
  // Background color of inactive selections (inactive view)
  inactiveSelection: "#3a3960",
  // Text color of inactive selections (inactive view)
  inactiveSelectionForeground: "#9998b9",
  // The color of the shadow used when a text area can be horizontally scrolled
  shadow: "#111111",
  // Syntax colors
  syntax: syntax,
  // Typography config
  typography: typography
};

export default theme;
