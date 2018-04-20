const math = require('./../math/math');

function findUpperBound(value) {
  if (typeof value === 'undefined') { return undefined; }
  if (value < 100) { return 100; }
  else {
    return (value > 600) ? math.myceil(value, 50) : math.myceil(value, 100);
  }
};

function findLowerBound(value) {
  if (typeof value === 'undefined') { return undefined; }
  if (value < 100) { return 100; }
  else {
    return (value > 600) ? math.myfloor(value, 50) : math.myfloor(value, 100);
  }
};

//////////////////////////////
//       Main Function      //
//////////////////////////////
function temperature(input) {
  let _input = input;

// Find the unit of temperature
  this.unit = 'F';
  let _unit = _input.slice(-1).toLowerCase();
  if (RegExp('[a-z]').test(_unit)) {
    _input = _input.slice(0,_input.length-1);
    if (_unit == 'c') {
      _input = ~isNaN(Number(_input)) ? (1.8*_input) + 32 : undefined;
    }
  }

// Find the value of temperature
  this.value = (typeof _input !== 'undefined') ? _input : undefined;
  this.upperbound = findUpperBound(this.value);
  this.lowerbound = findLowerBound(this.value);
};

module.exports = temperature;
