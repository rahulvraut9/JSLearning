console.log(`************************TASK 1**************************`);
function maleMarriageEligibility(gender,age,boyName){
        var res = age>= 21 ? `Hey ${boyName} you are age is ${age} eligible for Marriage `: `${boyName} You are is ${age} not eligible for Marriage`
        console.log(res);
}
maleMarriageEligibility("male",23,"Stew Jobs");
maleMarriageEligibility("male",10,"Bill Gates");
console.log(`************************TASK 2**************************`);
function femaleMarrigeEligibility(gender,age,girlName){
    var res = age>= 18 ? `Hey ${girlName} you are age is ${age} eligible for Marriage `: `${girlName} You are is ${age} not eligible for Marriage`
    console.log(res);
}
femaleMarrigeEligibility("female",21,"Jenifer");
femaleMarrigeEligibility("female",17,"Malinda Gates");
