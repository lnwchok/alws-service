exports.linear = (x0,x1,y0,y1,x) => {
  if (x == x0) {
    return y0;
  }
  if (x == x1) {
    return y1;
  }
  return (y0*(x1-x)/(x1-x0)) + (y1*(x-x0)/(x1-x0));
};
