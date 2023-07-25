 var wordCount = function(word){
    var words = word.split(" ");
    var wordCount = words.length;
    console.log("strin is",word);
    return wordCount;
 }
 var result = wordCount("I am UI Developer")   
 console.log("totsl word count is "+result);