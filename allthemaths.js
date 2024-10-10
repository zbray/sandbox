function allTheMaths(x,y){
  const plus = (x,y) => x + y;
  const minus = (x,y) => x - y;
  const multiply = (x,y) => x * y;
  const divide = (x,y) => x / y;

  let results ={
    plus: plus(x, y),
    minus: minus(x, y),
    multiply: multiply(x, y),
    divide: divide (x,y)
}
return results;
}
console.log(allTheMaths(5,10));