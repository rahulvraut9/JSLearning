var arrayFruits = ["Banana","Orange","Apple","Mango","watermelon"];
console.log(`This is Given Array ---- ${arrayFruits}`);
console.log(`First Element is "${arrayFruits[0]}" and last element is "${arrayFruits[arrayFruits.length-1]}"`);
arrayFruits.unshift("Papaya")
console.log(`Pappaya added at 0th index ---- ${arrayFruits}`);
arrayFruits.splice(arrayFruits.length-2,1);
console.log(`Mango Removed ---- ${arrayFruits}`);
arrayFruits.push("Pineapple");
console.log(`Pineapple added at last index ---- ${arrayFruits}`);
arrayFruits.splice(arrayFruits.length-2,0,"Dragon Fruit");
console.log(`Dragon Fruit added at before watermelon ----${arrayFruits}`);
arrayFruits.splice(2,1,"Kiwi");
console.log(`Removed watermelon with kiwi ---- ${arrayFruits}`);
var newArra = []
for(i=0;i<=3;i++){
    newArra.push(arrayFruits[i])
}
console.log(`Print only first 4 element `,newArra);
lastThree = arrayFruits.slice(arrayFruits.length-3);
console.log(`Last three elements`,lastThree);


