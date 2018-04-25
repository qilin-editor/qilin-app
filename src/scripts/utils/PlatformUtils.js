import os from "os";

export function getPlatform() {
  switch (os.platform()) {
    case "android":
      return "android";
    case "win32":
      return "windows";
    case "darwin":
      return "darwin";
    default:
      return "linux";
  }
}
