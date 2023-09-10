class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_comapany){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_comapany=emp_comapany;
    }
}
const emp_Anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monali=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

let arrayEmployees = [
    emp_Anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monali,
    emp_viny,
    emp_mahi,
  ];

  const sortById = arrayEmployees.sort((n1,n2)=>n1.emp_id>n2.emp_id ? 1 :-1)
  console.log(`Sorted Array by Id`);
  for(let newArr of sortById){
    console.log(`${newArr.emp_id} ${newArr.emp_name} ${newArr.emp_dept}`);
  }

  const sortByDept = arrayEmployees.sort((n1,n2)=>n1.emp_dept>n2.emp_dept ? 1 :-1)
  console.log(`Sorted Array by Department`);
  for(let newArr of sortByDept){
    console.log(`${newArr.emp_id} ${newArr.emp_dept} ${newArr.emp_comapany}`);
  }

  const sortBydSal = arrayEmployees.sort((n1,n2)=>n1.emp_salary>n2.emp_salary ? -1 :1)
  console.log(`Sorted Array by Desending Salary`);
  for(let newArr of sortBydSal){
    console.log(`${newArr.emp_name} ${newArr.emp_salary} ${newArr.emp_comapany}`);
  }