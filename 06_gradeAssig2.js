console.log(`------------------------TASK 2---------------------------`);

function gradeCalculation(mark){
    markvalue = +mark;
    if(mark<=0 || isNaN(markvalue) || mark>100 ){
        console.log(`Your mark is invalid`)
    }else if(mark>=90){
        console.log(`Funtastic mark: ${mark}, Your grade is A+`);
    }else if(mark>=75){
        console.log(`Excellent mark: ${mark}, Your grade is A`);
    }else if(mark>=50){
        console.log(`Good mark: ${mark}, Your grade is B`);
    }else if(mark>=35){
        console.log(`Mark is: ${mark}, Your grade is C, Need to improvement`);
    }else{
        console.log(`Mark is: ${mark}, Your grade is D, Try Next Time`);
    }
}
gradeCalculation(98);
gradeCalculation(-7);
gradeCalculation(80);
gradeCalculation(150);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(undefined);
gradeCalculation(64);
gradeCalculation("Eighty");
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation(null);

console.log(`------------------------TASK 3---------------------------`);

function check(num){
    if(typeof num == "string" && num.length>=10){
        console.log(`You Enterd ${num} & length is ${num.length}`);
        return;
    }else if(typeof num == "string"){
        console.log(`You Enterd ${num} is not more than 10 cherecter length is ${num.length}`);
        return;
    }
    if(num%2==0){
        console.log(`${num} is EVEN`);
    }else{
        console.log(`${num} is ODD`);
    }
}
check("JavaScript");
check("Rahul")
check(20);
check(21);

function call(str){
    str1= str[0] +str[1] + str[2] + str[3]
    console.log(`${str} starts with ${str1} : ${str.startsWith(str1)} `);
}
call("JavaScript");