"use strict";
var path = require("path");
function addFoo(dirPath) {
    return path.posix.resolve(dirPath, "foo");
}
exports.addFoo = addFoo;
