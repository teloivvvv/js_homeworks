let text = "Wonderful Joyful Happiness Time Task Apple";
let re = /\b[^Aa\s]{6,}\b/g;

let matches = text.match(re);
console.log(matches); 