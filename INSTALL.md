# Installation guide

**The easy way:**
You can download one of the [releases](https://github.com/qilin-editor/qilin-app/releases). There should be a compressed package for **Linux** (`qilin-lin.zip`), **Windows** (`qilin-win.zip`) and **macOS** (`qilin-osx.zip`). Linux package should work on *most* Linux distributions (Ubuntu, …).

**The better way:**
We recommend you building Qilin yourself to get the latest features (as the last release can be several commits behind the `master` branch). You will need [Node.js](https://nodejs.org/en/download/) installed locally on your machine and follow [instructions in README.md](https://github.com/qilin-editor/qilin-app#development):

1. Clone or [download](https://github.com/qilin-editor/qilin-app/archive/master.zip) Qilin's repository from GitHub (`$ git clone https://github.com/qilin-editor/qilin-app.git`);
2. Move to the downloaded directory in your terminal (`$ cd qilin-app`);
3. Download NPM dependencies via: `$ npm i`;
4. Once all dependencies are installed, build Qilin via: `$ npm run build`;
5. Once the build is finished, you can find Qilin binaries in `build/` folder;

> **Note:** You might need to run all of those scripts with administrator privileges (`sudo`) in order to complete the build.
