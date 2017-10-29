# Installation guide

## Stable releases:

You can download one of the [stable releases](https://github.com/qilin-editor/qilin-app/releases). There should be a compressed package for **Linux** (`qilin-linux.zip`), **Windows** (`qilin-windows.zip`) and **macOS** (`qilin-macos.zip`). Linux package should work on *most* Linux distributions.

> **Note:** We use [`nw.js`](https://nwjs.io/) to build and run Qilin on desktop platforms. If you encounter any problems, please, check first that you platform is being supported by `nw.js` [before creating an issue](https://github.com/qilin-editor/qilin-app/issues/new).

## Developer preview:
You building Qilin yourself to check the latest features (as the last stable release can be several commits behind the `master` branch). You will need the latest version of [Node.js](https://nodejs.org/en/download/) installed locally on your machine and follow [instructions in README.md](https://github.com/qilin-editor/qilin-app#development):

1. Clone or [download](https://github.com/qilin-editor/qilin-app/archive/master.zip) Qilin's repository (`$ git clone https://github.com/qilin-editor/qilin-app.git`).
2. Move to the downloaded directory in your terminal (`$ cd qilin-app`).
3. Download NPM dependencies  (`$ npm i`).
4. Once all dependencies are installed, build Qilin (`$ npm run build`).
5. Once the build is finished, you can grab Qilin binaries from `build/` folder.

> **Note:** In some cases, you might need to run those scripts with administrator privileges (`sudo`) in order to complete the build.

> **Note:** We encourage you to use Bash or a similar Unix shell. Our build scripts could be incompatible with Windows. Therefore, you can [help us to make it working everywhere](https://github.com/qilin-editor/qilin-app/pulls).
