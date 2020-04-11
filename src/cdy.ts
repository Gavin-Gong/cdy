// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
import { sample } from "lodash";
import { similarChar } from "./data/zh";

export default function (text: string, seed = 0.1) {
  let result = []
  const charArray = Array.from(text)
  for (const char of charArray) {
    if (Math.random() <= seed) {
      let temp
      for (const charGroup of similarChar) {
        if (charGroup.includes(char)) {
          temp = sample(charGroup.filter(v => v !== char))
          break;
        }
      }
      result.push(temp || char)
    } else {
      result.push(char)
    }
  }
  return result.join("")
}
