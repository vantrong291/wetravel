export const RANGE = (a,b) => Array.from((function*(x,y){
  while (x <= y) yield x++;
})(a,b));