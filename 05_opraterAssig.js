console.log(`************************TASK 1**************************`);
function squareofWordLength(word){
  var lngth = word.length;
  console.log(`the word is "${word}" & length is ${lngth} & square is ${lngth*lngth}`  )
}
squareofWordLength("Javascript");
squareofWordLength("Google Chrome");
squareofWordLength("Developer Smart");
console.log(`************************TASK 2**************************`);
var string = "I am Angular Developer";
function cal(){
    words = string.split(" ").length;
    ln = string.length
    console.log(`The length of string is ${ln} & number of words id ${words}`);
    console.log(`String/Words is ${ln/words}`);
    console.log(`String*Words is ${ln*words}`);
}
cal();
console.log(`************************TASK 3**************************`);


