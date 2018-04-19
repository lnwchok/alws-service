function temperature(input) {
  let _input = input;
  // this.input = _input.toUpperCase();

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
// Find the ceiling 100 of temperature
  this.upperbound = (typeof this.value !== 'undefined') ? Number(Math.ceil(this.value/100) * 100) : undefined;
// Find the floor 100 of temperature
  this.lowerbound = (typeof this.value !== 'undefined') ? Number(Math.floor(this.value/100) * 100) : undefined;
}

module.exports = temperature;
