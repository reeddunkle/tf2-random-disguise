var fs = require('fs');
var CFG_PATH = require('./cfg_path');

var CLASSES = {
  scout: 1,
  sniper: 2,
  soldier: 3,
  demoman: 4,
  medic: 5,
  heavy: 6,
  pyro: 7,
  spy: 8,
  engineer: 9,
}

var CLASSES_IN_POOL = [
  CLASSES.scout,
  CLASSES.sniper,
  // CLASSES.soldier,
  CLASSES.demoman,
  CLASSES.medic,
  // CLASSES.heavy,
  CLASSES.pyro,
  CLASSES.spy,
  CLASSES.engineer
];

function getRandomInt(min, max) {
  var intMin = Math.ceil(min);
  var intMax = Math.floor(max);
  return Math.floor(Math.random() * (intMax - intMin)) + intMin;
}

function getRandomElement(arr) {
  var i = getRandomInt(0, arr.length);
  return arr[i];
}

function run() {
  var randClassNum = getRandomElement(CLASSES_IN_POOL);
  var cfgScript = `disguise ${randClassNum} -1`;

  fs.writeFile(CFG_PATH, cfgScript, function(err) {
      if(err) {
        return console.log(err);
      }
  });

  setTimeout(run, 1000);
}

run();
