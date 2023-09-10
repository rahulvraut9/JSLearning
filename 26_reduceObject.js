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

  const wiproEmployee = arrayEmployees.filter(employee=> employee.emp_comapany=="Wipro");
  console.table(wiproEmployee);

  const itHr = arrayEmployees.filter(employee=> employee.emp_dept=="IT" || employee.emp_dept=="HR");
  console.table(itHr);

  const ids = arrayEmployees.filter(employee=> employee.emp_id >50);
  console.table(ids);

  const startsWith = arrayEmployees.filter(employee=>
    employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M"));
  console.table(startsWith);

  const avrageSal = arrayEmployees.reduce((total,emp)=>{
      return total+emp.emp_salary;
  },0)
 
  console.log(`Avrage Salary of all Deparment: ${avrageSal/arrayEmployees.length}`);

  const avgSalIT = arrayEmployees.filter(employee => employee.emp_dept=="IT");
  const itAvg = avgSalIT.reduce((accu,val)=>accu+val.emp_salary,0);
  console.log(`Avrage Salary Of IT Department ${itAvg/avgSalIT.length}`);
  
