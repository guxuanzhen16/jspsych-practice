var sodas = ['coca-cola', 'pepsi', 'sprite'];
// variable indexes begin at 0
console.print(sodas[0]) // prints 'coca-cola'

var listOfNum = [2, 3, 6, 7, 12];
listOfNum = listOfNum.filter(x => x > 5);
listOfNum.forEach(function(x){
  x + 100;
  console.log(x);
});

// expected output: 102, 103, 105, 107
