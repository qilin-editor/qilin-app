# Qilin Editor

[![Greenkeeper badge](https://badges.greenkeeper.io/Bartozzz/Qilin.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/Bartozzz/Qilin.svg)](https://travis-ci.org/Bartozzz/Qilin/)
[![Github Releases](https://img.shields.io/github/downloads/Bartozzz/Qilin/latest/total.svg)](https://github.com/Bartozzz/Qilin/releases)

**Qilin** is a free, open-source text editor developed for exact sciences in mind. It fully supports [`LaTeX`](https://www.latex-project.org/), [`KaTeX`](https://khan.github.io/KaTeX/) and [`AsciiMath`](http://asciimath.org/). Qilin works on each desktop platform - it is based on `Chromium` and `Node.js`, licensed under the *BSD-3-Clause* license.

![Qilin light mode](http://i.imgur.com/0gxjJIo.png)

## Contributing

### Bug reporting

[![Github Open Issues](https://img.shields.io/github/issues-raw/Bartozzz/Qilin.svg)](https://github.com/Bartozzz/Qilin/issues)
[![Github Closed Issues](https://img.shields.io/github/issues-closed-raw/Bartozzz/Qilin.svg)](https://github.com/Bartozzz/Qilin/issues?q=is%3Aissue+is%3Aclosed)
[![Github Pull Requests](https://img.shields.io/github/issues-pr-raw/Bartozzz/Qilin.svg)](https://github.com/Bartozzz/Qilin/pulls)

Changes and improvements are more than welcome! Feel free to fork and open a pull request. If you have found any issues, please [report them here](https://github.com/Bartozzz/Qilin/issues/new) - they are being tracked on [GitHub Issues](https://github.com/Bartozzz/Qilin/issues).

### License

Project was created and developed by [Bartosz Łaniewski](https://github.com/Bartozzz). The full list of contributors can be found [here](https://github.com/Bartozzz/Qilin/graphs/contributors). Qilin's code is [BSD-3-Clause licensed](https://github.com/Bartozzz/Qilin/blob/master/LICENSE). We also provide an additional ["patent" grant](https://github.com/Bartozzz/Qilin/blob/master/PATENTS).

### Development

We have prepared multiple commands to help you develop Qilin on your own. Don't forget to install all `Node.js` dependencies from [npm](https://www.npmjs.com/). You
will need a local copy of [Node.js](https://nodejs.org/en/) installed on your machine.

```bash
$ sudo npm install
```

Eventually, you might need to install `node-sass` manually, with the following command:

```bash
$ sudo npm install node-sass
```

#### Usage

```bash
$ sudo npm run <command>
```

#### List of commands

| Command       | Description                                       | Root |
|---------------|---------------------------------------------------|:----:|
| preapre       | Compiles SCSS and JavaScript used by Qilin        | ×    |
| build         | Builds Qilin releases for macOS, Windows, Linux   | ✓    |
| start         | Runs Qilin application                            | ×    |
| clean         | Deletes output, builds ands cache                 | ✓    |

## Screenshots

All the screenshots can be found on [Imgur](http://imgur.com/a/CVOFC). You can found some devblogs on my [Youtube channel](https://www.youtube.com/playlist?list=PLK2Lb6JZ41iOvtBN4H5GLELHYJDOVZTGN).

![Qilin light mode](http://i.imgur.com/0gxjJIo.png)
![Qilin dark mode](http://i.imgur.com/eUWZvKw.png)
