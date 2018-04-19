exports.linear = function(x0,x1,y0,y1,x) {
  return (y0*(x1-x)/(x1-x0)) + (y1*(x-x0)/(x1-x0));
};
