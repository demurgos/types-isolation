"use strict";
var events_1 = require("events");
function watchChanges() {
    return new events_1.EventEmitter();
}
exports.watchChanges = watchChanges;
