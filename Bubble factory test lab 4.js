var scores = [60, 50, 60, 58, 54, 54,
  58, 50, 52, 54, 48, 69, 
  34, 55, 51, 52, 44, 51, 
  69, 64, 66, 55, 52, 61, 
  46, 31, 57, 52, 44, 18,
  41, 53, 55, 61, 51, 44]

function printAndGetHightScore (scores) {
var hightScore = 0;
var output;
for (var i = 0; scores.length > i; i++) {
output = "Bubble solutions #" + i + ": score " + scores[i];
console.log (output);
if (scores[i] > hightScore) {
hightScore = scores[i];
}
}
return hightScore;
}

var hightScore = printAndGetHightScore (scores);

console.log ("Bubble tests: " + scores.length);
console.log ("Highest bubble score: " + hightScore);

var bestSolutions = [];

for (var i = 0; scores.length > i; i++) {
if (scores[i] == hightScore) {
bestSolutions.push (i); 
}
}

console.log ("Solutions with the highest score: " + bestSolutions);

function getBestResult(scores, hightScore) {
  var bestSolutions = [];
  for (var i = 0; scores.length > i; i++) {
    if (scores[i] == hightScore) {
      bestSolutions.push (i);
    }
  }
  return bestSolutions;
}

var bestSolutions = getBestResult(scores, hightScore);

console.log ("Solution with the highest score: " + bestSolutions);