console.log("=================== No Parameter No Return Type =============");
function name(){
    var name = "Rahul"
    console.log('Name is:',name);
}
function city(){
    var city = "Pune"
    console.log('City is:',city);
}
name();
city();
console.log("=================== function with Parameter No Return Type =============");
function personalDtails(fname,lname,cname){
    console.log('First Name:',fname);
    console.log('Last Name:',lname);
    console.log('Collage Name:',cname);
}
personalDtails('Rahul','Raut','MssCet,jalna');
console.log("=============== swapValues function with Parameter No Return Type =============");
function swapValues(val1,val2){
    temp = val1;
    va1 = val2;
    va2 = temp;
    if(typeof va1&&val2 === 'string'){
        console.log('Before Swap => Virat is',val1,'Anushaka is',val2);
        console.log('After Swap => Virat is',va1,'Anushaka is',va2);
    }else{
        console.log('Before Swap => Value1 is',val1,'Value2 is',val2);
        console.log('After Swap => Value is',va1,'Value2 is',va2);
    }
}
swapValues("Cricketer","Actress");
swapValues(20,30);
console.log("=============== addThreeNumbers function with NoParameter & No Return Type =============");
function addThreeValues(int1,int2,int3){
   if(typeof int1 ==='number'){
    console.log('Addition of Number is:',int1+int2+int3);
   }else{
    console.log('Concatenation of String is:',int1+int2+int3);
   }
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning")
console.log("============ Bank Details function with 4 Parameter & No Return Type =============");
function bankDetails(name,ifsc,city,pincode){
    console.log('Name Of Bank',name);
    console.log('IFSC Code',ifsc);
    console.log('Branch Name',city);
    console.log('Postal Code',pincode);
    console.log('\n');
}
bankDetails('SBI','SBI0123','Pune',452311);
bankDetails('HDFC','HDFC123','Beed',532313);
bankDetails('AXIS','AXIS123','Mubai',242313);




