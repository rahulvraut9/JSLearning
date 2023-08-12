var globalVariable =100;
function outer(){
    let outerFuncVariable = 200;
    let innerfunction = function(){
        let innerfuncvariable = 300;
        console.log(innerfuncvariable);
        console.log(outerFuncVariable);
        console.log(globalVariable);
    }
    return innerfunction
}
// let innerFun = outer();
// innerFun();
// or
outer()();