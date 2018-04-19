function temperature(input) {
  // let unit = '';
  let _input = input;
  this.unit = 'F';
  // let tmp = _input.charAt(_input.length-1).lowercase();
  let _unit = _input.slice(-1).toLowerCase();
  if (RegExp('[a-z]').test(_unit)) {
    _input = _input.slice(0,_input.length-1);
    if (_unit == 'c') {
      this.unit = 'C';
    }
  }

  let _value = Number(_input);
  // console.log(_value);
  // if (isNaN(_value)) {
  //   this.value = undefined;
  // } else {
  //   this.value = _value;
  // }
  this.value = isNaN(_value) ? undefined : _value;
}

module.exports = temperature;
