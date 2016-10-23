import {EventEmitter} from "events";

export function watchChanges (): EventEmitter {
    return new EventEmitter();
}
