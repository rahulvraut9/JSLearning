let isNotesPrepared = true;
let promice = new Promise(function(resolve,reject){
    if(isNotesPrepared){
        resolve(`Takes this notes guys and be prepared please`);
    }else{
        reject(`Sorry guys, I cant share notes as I didn't get time`)
    }
});
promice.then(function(success){
    console.log(`---------On Success--------`);
    console.log(`thank you with smiley`);
    console.log(success);
}).catch(function(failure){
    console.log(`---------On Failure--------`);
    console.log(`sir thoda vel kadhu shaktat`);
    console.log(failure);
}).finally(function(){
    console.log(`I must have notes whether sir would share it or not`);
})