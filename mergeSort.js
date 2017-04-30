function mergeSort(arr){
  if(arr.length < 2){
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left_input, right_input){
  let sortedArr = [];
  while(left_input.length && right_input.length){
    if(left_input[0] < right_input[0]){
      sortedArr.push(left_input.shift());
    }
    sortedArr.push(right_input.shift());
  }
  while(left_input.length){
    sortedArr.push(left_input.shift());
  }
  while(right_input.length){
    sortedArr.push(right_input.shift());
  }
  return sortedArr;
}

console.log(mergeSort([1, 87, -3, 3]));
