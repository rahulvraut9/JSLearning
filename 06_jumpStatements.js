console.log(`---------------break;----------------`);
for(i=0;i<=10;i++){
    console.log(`Iteration Starts`);
    if(i==5){
        break;
    }
    console.log(`Value is ${i} Iteration No is ${i+1}`);
    console.log(`Iteration End`);
    console.log(`--------------------------------------`);
}
console.log(`---------------Contiue;----------------`);
for(i=0;i<=5;i++){
    console.log(`Iteration Starts`);
    if(i==3){
        continue;
    }
    console.log(`Value is ${i} Iteration No is ${i+1}`);
    console.log(`Iteration End`);
    console.log(`--------------------------------------`);
}