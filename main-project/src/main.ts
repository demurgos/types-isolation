import * as libA from "lib-a";
import * as libB from "lib-b";

import {EventEmitter} from "events";
import {Stats} from "fs";

const ee: EventEmitter = libA.watchChanges();

const fooPath = libB.addFoo("/dir");

console.log(fooPath instanceof Stats); // false
