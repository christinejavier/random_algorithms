// Given a cost function and a budget find the maximum quantity you can buy given those 2 parameters

function maxQty(cost, budget){
  var qty = budget/cost;
  return Math.floor(qty);
}

console.log(maxQty(1.5, 8));
