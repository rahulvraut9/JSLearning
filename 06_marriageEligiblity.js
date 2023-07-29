console.log(`------------------------TASK Marrige Eligibility---------------------------`);

var marraigeEligibility = function(age,gender,name){
    if(gender=="male" && age>=21 || gender =="female" && age>=18){
        console.log(`${name} Your age is ${age} and you Are Eligible For Marriage`);
    }else{
        console.log(`${name} Your age is ${age} and you Are not Eligible For Marriage`);
    }
}
marraigeEligibility(21,"male","Virat");
marraigeEligibility(20,"male","Ruturaj");
marraigeEligibility(18,"female","Anusha");
marraigeEligibility(16,"female","Sadhna");
console.log(`\n`)
console.log(`------------------------TASK LeapYear---------------------------`);

var checkLeapYear = function(year){
    yearValue = +year
    if(isNaN(year) || year<=3){
        console.log(`${year} Invalid Input`);
    }else if((year%4==0) &&((year%400) || (year%100!==0))){
        console.log(`${year} is leap year.`);
    }else{
        console.log(`${year} is not leap year.`);
    }
}

checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("TwentyTwenty\n");
checkLeapYear(undefined,"\n");
checkLeapYear(NaN);
checkLeapYear(1750);



