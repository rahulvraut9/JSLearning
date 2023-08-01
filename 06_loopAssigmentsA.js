console.log(`---------------------Vowels--------------------`);
function vowels(str) {
  count = 0;
  for (i = 0; i <= str.length - 1; i++) {
    char = str[i];
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u" ||
      char == "A" ||
      char == "E" ||
      char == "I" ||
      char == "O" ||
      char == "U"
    ) {
      count = count + 1;
    }
  }
  console.log(`The Number Of vowells in strinng is : ${count}`);
}
vowels("I am Very Good IT Developer");
console.log(
  `---------------------Addition 5 numbers with their cube--------------------`
);

function cube() {
  count = 0;
  for (i = 1; i <= 5; i++) {
    count = count + i * i * i;
  }
  console.log(`cube and adition of all nummbers is`, count);
}
cube();
console.log(
  `---------------------print only odd positioned string--------------------`
);
function oddPosition(string) {
  result = "";
  for (i = 0; i <= string.length - 1; i++) {
    char = string.charAt(i); //string[i]
    if (i % 2 == 0 && char !== " ") {
      result = result + string[i];
    }
  }
  console.log(result);
}
oddPosition("Hard work alwyas pay back");
oddPosition("soon I will be Angular IT champ");
console.log(
  `---------------------reverse string and removing spaces--------------------`
);
function reverseString(string) {
  result = "";
  for (i = string.length; i >= 0; i--) {
    char = string.charAt(i); //string[i]
    if (char == " ") {
      continue;
    }
    result = result + char;
  }
  console.log(result);
}
reverseString("Hard work alyas pays back");


console.log(`---------------------Vowels--------------------`);
function vowels(str) {
  count = 0;
  for (i = 0; i <= str.length - 1; i++) {
    char = str[i];
   if(char.includes('a','e','i')){
    count = count + 1;
   }
  }
  console.log(`The Number Of vowells in strinng is : ${count}`);
}
vowels("I am Very Good IT Developer");