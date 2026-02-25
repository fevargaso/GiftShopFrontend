import {
  argsOrArgArray,
  filter,
  not,
  raceWith
<<<<<<<< HEAD:.angular/cache/18.2.21/ElysiumFrontend/vite/deps/chunk-IBPEAIWH.js
} from "./chunk-LY5LHBYX.js";
import {
  __read,
  __spreadArray
} from "./chunk-4JLIZ3DY.js";
========
} from "./chunk-4FM7L5J3.js";
>>>>>>>> Dev:.angular/cache/18.2.21/ElysiumFrontend/vite/deps/chunk-HIQUU2WY.js

// ../node_modules/rxjs/dist/esm5/internal/operators/partition.js
function partition(predicate, thisArg) {
  return function(source) {
    return [filter(predicate, thisArg)(source), filter(not(predicate, thisArg))(source)];
  };
}

// ../node_modules/rxjs/dist/esm5/internal/operators/race.js
function race() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return raceWith.apply(void 0, __spreadArray([], __read(argsOrArgArray(args))));
}

export {
  partition,
  race
};
<<<<<<<< HEAD:.angular/cache/18.2.21/ElysiumFrontend/vite/deps/chunk-IBPEAIWH.js
//# sourceMappingURL=chunk-IBPEAIWH.js.map
========
//# sourceMappingURL=chunk-HIQUU2WY.js.map
>>>>>>>> Dev:.angular/cache/18.2.21/ElysiumFrontend/vite/deps/chunk-HIQUU2WY.js
