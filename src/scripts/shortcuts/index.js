import shortcut from "keymage";
import * as CoreShortcuts from "./CoreShortcuts";
import * as FileShortcuts from "./FileShortcuts";

shortcut("defmod-n", CoreShortcuts.newWindow);
shortcut("defmod-o", FileShortcuts.openFile);
shortcut("defmod-s", FileShortcuts.saveFile);
shortcut("defmod-shift-s", FileShortcuts.saveFileAs);
