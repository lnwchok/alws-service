exports.myceil = (value, degree) => {
  return Number(Math.ceil(value/degree) * degree);
};

exports.myfloor = (value, degree) => {
  return Number(Math.floor(value/degree) * degree);
};
