console.log(`callback fuction`);
let notification = function(){
    console.log(`----------Inside FE----------`);
    console.log(`Inside notification`);
}
// let intervalID = setTimeout(notification,3000); // it will not run settimeout
// clearTimeout(intervalID);

setTimeout(notification,4000);
setTimeout(function(){
    for(i=0;i<=10;i++){
        if(i%2==0){
            console.log(i);
        }
    }
},3000)