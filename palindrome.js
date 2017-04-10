// Implement a function to check if a string is palindrome or not
function isPalindrome(input){
  if (typeof input !== "string"){
    return null;
  }
  else{
    input = input.split("");
    for(var i = 0; i < input.length/2; i++){
      if(input[i] !== input[input.length - 1 -i]){
        return false;
      }
    }
    return true;
  }
}

console.log(
  isPalindrome("noon")
);
