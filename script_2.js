
let number = window.prompt("De quel nombre veux-tu calculer la factorielle ?");

function factorialOf(num) {
  //Initially set factorial as number
  let factorial = num;
  
  //A for loop starting with 1 and running the times equal to num
  for (i = 1; i < num; i++) {
      //Set factorial to the number itself * i
      factorial = factorial * i;
  }
  //Return factorial
  return factorial;
}

console.log(factorialOf(number));