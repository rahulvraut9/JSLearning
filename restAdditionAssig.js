function add(num1,num2,...num){
    sum = num1+num2;
    string = ""
    for(i=0;i<=num.length-1;i++){
    sum+=num[i];
    string = string + ","+ num[i] 
       }
   console.log(`The Addition of ${num1}, ${num2} ${string} is ${sum}`);
   
    }
    add(5,6);
    add(9,5,6);
    add(70,90,51,68);
    add(89,90,45,78,90,51,68);

    