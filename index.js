const _ = require("lodash"); // external dependency need to load first

const items = [1, [2, [3, 4, [5]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);

console.log("Hello, people. How are you?");
