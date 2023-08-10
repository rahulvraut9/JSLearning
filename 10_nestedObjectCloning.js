let Jenny = {
    fullName : "Jenny Musk",
    age : 22,
    city : "Pune",
    college : "COEP pune",
    marks : {
        physics : 89,
        math : 91,
        science : 88
    }
}

let maria  = JSON.parse(JSON.stringify(Jenny));
maria.marks.math = 100;
console.log(`Jenny Details : ${Jenny.marks.math}`);
console.log(`maria Details : ${maria.marks.math}`);

//Object Merge

let sweety = {
    height: 20,
    name : "sweety",
}
let cathrine = {
    weigth: 20,
    country : "sweeden",
}
let mergeObject = Object.assign({},cathrine,sweety);
console.table(mergeObject);