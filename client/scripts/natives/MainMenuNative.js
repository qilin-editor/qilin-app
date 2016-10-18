export default () => {
    const { Menu } = nw;

    const mainMenu = new Menu({ type: "menubar" });

    if (process.platform === "darwin") { //check if current OS is MacOS, createMacBuiltin crashes the app on Windows and possibly on Linux
        mainMenu.createMacBuiltin("Qilin");
    }



    return mainMenu;
};
