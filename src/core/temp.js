function temp(input) {
  // let unit = '';
  let this.unit = 'F';
  let tmp = input.charAt(input.length-1).lowercase();
  if (RegExp('[a-z]').test(tmp)) {
    if (tmp == 'c') {
      this.unit = 'C';
      this.value = input;
    }
  }

  let this.value = isNan(Number(input)) ? undefined : input;


}
