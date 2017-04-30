var phoneInfo = {
  one: "O_O",
  two: "abc",
  three: "edf"
}

function arrangeLetters() {
  let combos = [];
  for(let i = 0; i < phoneInfo.two.length; i++){
    for(let j = 0; j < phoneInfo.three.length; j++){
      combos.push(phoneInfo.two[i] + phoneInfo.three[j]);
    }
  }
  return combos;
}
console.log(
arrangeLetters()
);
