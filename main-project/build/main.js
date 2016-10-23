"use strict";
var libA = require("lib-a");
var libB = require("lib-b");
var fs_1 = require("fs");
var ee = libA.watchChanges();
var fooPath = libB.addFoo("/dir");
console.log(fooPath instanceof fs_1.Stats); // false
