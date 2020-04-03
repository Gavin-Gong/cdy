// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
import sample from "lodash-es/sample";
import { Hans } from "./data/zh";

export default (text: string, seed = 0.3): string => {
  return Array.from(text).map(v => {
    if (Math.random() <= seed) {
      return Hans[v] ? sample(Hans[v]) : v;
    } else {
      return v;
    }
  }).join("");
}
