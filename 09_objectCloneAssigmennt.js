console.log(`---------Shalow Clone--------`);
const arrayNUM = [20,3,4,56,90,400,49];
let arrayNUM2 = arrayNUM;
arrayNUM2.push(55);
arrayNUM2.push(66);
console.log(`The Given Array is ${arrayNUM}`);
console.log(`The Updated array Using Shalow clone is ${arrayNUM2}`);
console.log(`---------Deep Clone--------`);
let arrayNUM3 = [...arrayNUM];
arrayNUM3.push(10)
arrayNUM3.push(25)
console.log(`The Given Array is ${arrayNUM}`);
console.log(`The Updated array Using Spread Oprater is ${arrayNUM3}`);
console.log(`---------Merge Array Using Sprad Operator--------`);
let arrayNUM4 = [2,20,14,8];
arrayNUM4 = [...arrayNUM4,...arrayNUM];
console.log(`Merged Array is ${arrayNUM4}`);
console.log(`---------Object Operation--------`);
const employee_info = {
    emp_id :27,
    emp_name : "Jhon Doe",
    salary : {
        july_month : "40,000INR",
        august_month : "50,000INR",
        jun_month : "65,000INR"
    },
    address : {
        locality : {
            colony : "OM Vrindavan Society",
            street : "Kanch Pokli, 431202"
        },
        city : "Mumbai",
        state : "Mahashtra",
        country : "India"
    },
    mobiles : ["+91 8600 3456 88","1000- 4567 32","+91- 9086 5678 77"]
}

console.log("The Given Object is",employee_info);
console.log(`Address : Locality => ${JSON.stringify(employee_info.address.locality)}, City => ${JSON.stringify(employee_info.address.city)}, Country => ${JSON.stringify(employee_info.address.country)}`);

let employee_info2 = JSON.parse(JSON.stringify(employee_info));
employee_info2.salary.july_month = "80,000INR";
console.log(`The Country of Given Object is ${employee_info.address.country}`);
employee_info.address.country = "United Kingdom";
console.log(`The Updated Country of Given  Object is ${employee_info.address.country}`);
console.log(`The Upded Salary of July Month Of Cloned Object is ${employee_info2.salary.july_month}`);