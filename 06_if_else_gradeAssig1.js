console.log(`------------------------TASK 1---------------------------`);
var voteEligibility = function(age,name){
        ageValue = +age;
        if(age<=0 || isNaN(ageValue) || age>=120){
                console.log(`${name} Your age is Invalid `);
        }else if(age>=18){
                console.log(`${name} You are eligible for vote.`)
        }else{
            console.log(`${name} You are not eligible for vote.`)
        }
}
voteEligibility(22,"Virat");
voteEligibility("23","Ajinkya");
voteEligibility("US","Rohit");
voteEligibility(undefined,"Hardik");
voteEligibility(null,"Ruturaj");
voteEligibility(130,"SuryaKumar");



