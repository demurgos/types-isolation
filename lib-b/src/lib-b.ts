import * as path from "path";

export function addFoo(dirPath: string): string {
    return path.posix.resolve(dirPath, "foo");
}
