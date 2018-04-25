import fs from "fs";
import shortcut from "keymage";
import { editor } from "../stores";
import { click } from "../utils/FileUtils";

function openFile(path) {
  fs.readFile(path, "utf8", (error, content) => {
    if (error) {
      console.log(error);
    } else {
      editor.changePath(path);
      editor.changeContent(content);
      editor.saved = true;
    }
  });
}

function saveFile(path, content) {
  fs.writeFile(path, content, error => {
    if (error) {
      console.log(error);
    } else {
      editor.changePath(path);
      editor.changeContent(content);
      editor.saved = true;
    }
  });
}

shortcut("defmod-n", event => {
  event.preventDefault();
  event.stopPropagation();

  nw.Window.open("dist/index.html", {
    new_instance: true,
    focus: true,
    frame: false,
    min_height: 600,
    min_width: 1000
  });

  return false;
});

shortcut("defmod-o", event => {
  event.preventDefault();
  event.stopPropagation();

  click("#openFile", e => {
    openFile(e.target.value);
  });

  return false;
});

shortcut("defmod-s", event => {
  event.preventDefault();
  event.stopPropagation();

  if (editor.path) {
    saveFile(editor.path, editor.content);
  } else {
    click("#saveFile", e => {
      saveFile(e.target.value, editor.content);
    });
  }

  return false;
});

shortcut("defmod-shift-s", event => {
  event.preventDefault();
  event.stopPropagation();

  click("#saveFile", e => {
    saveFile(e.target.value, editor.content);
  });

  return false;
});
