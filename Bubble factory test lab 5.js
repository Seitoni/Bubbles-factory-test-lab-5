var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69, 
              34, 55, 51, 52, 44, 51, 
              69, 64, 66, 55, 52, 61, 
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
            .33, .31, .25, .29, .27, .22,
            .31, .25, .25, .33, .21, .25,
            .25, .25, .28, .25, .24, .22,
            .20, .25, .30, .25, .24, .25,
            .25, .25, .27, .25, .26, .29];

function printAndGetHightScore(scores) {
  var hightScore = 0;
  for (var i = 0; scores.length > i; i++) {
    if (scores[i] > hightScore) {
      hightScore = scores[i];
    }
  }
  return hightScore;
}

var hightScore = printAndGetHightScore(scores);

function getBestResult (scores, hightScore) {
  var bestSolutions = [];
  for (var i = 0; scores.length > i; i++) {
    if (scores[i]==hightScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}

var bestSolutions = getBestResult (scores, hightScore);

function minimalCostHighestScores (scores, costs, hightScore) {
  var cost = 100;
  var index;
  for (var i = 0; costs.length > i; i++) {
    if (scores[i]=hightScore) {
      if (costs[i] < cost) {
            cost = costs[i];
            index = i;
      }
    }
  }
  return index;
}

var mostCostEffectiveSolutions = minimalCostHighestScores (scores, costs, hightScore);
console.log ("Bubble solution #" + mostCostEffectiveSolutions + "is the most cost effective");

