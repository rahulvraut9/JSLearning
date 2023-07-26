console.log(`************************TASK 3**************************`);
var eligibleTCS = function(name,ssc,hsc,deg,){
    var res = (ssc>=90 && hsc>=80 && deg>=70) ? `Congrates ${name} you are eligible For TCS Interview` : `${name} Unfortunately you are not eligible For Interview`;
    console.log(res);
}
eligibleTCS("Rahul Raut",95,85,73); 
eligibleTCS("Virat Kohli",91,88,74);
eligibleTCS("Anushka Kohli",72,90,80)