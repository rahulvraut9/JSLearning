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
  console.log(`TCS Employee`)
  const tcsEmp = arrayEmployees.filter((emp)=>{
    return emp.emp_comapany==="TCS"
  });
  console.log(tcsEmp);
  for(let employee of tcsEmp){
    console.log(`Company Name: ${employee.emp_comapany}, Employee Name: ${employee.emp_name} `);
  }
  console.log(`====Find the TCS Emplyees and get the ist of emplyee names only====`);
  const tcsEmpNames =tcsEmp.map((tcsnames)=>{
      return tcsnames.emp_name;
  });
console.log(tcsEmpNames);

console.log(`Method Chaning`);
arrayEmployees.filter(employee => employee.emp_comapany==="TCS")
.map(employee => employee.emp_name)
.forEach(employee=> console.log(employee));

 console.log(`Avrage Salary of Wipro Employee`)
  const wiproEmp = arrayEmployees.filter(emp=>emp.emp_comapany==="Wipro");
  console.table(wiproEmp);

  let sallarySum =0;
  for(let employee of wiproEmp){
    sallarySum = sallarySum+ employee.emp_salary
  }
console.log(`Avarage Salary Of Wipro Employee is: ${sallarySum/wiproEmp.length}`);

const avgSal = arrayEmployees.filter(employee => employee.emp_comapany==="Wipro" || employee.emp_comapany==="Infy");
// console.table(avgSal);
let totalSal =0;
for(let avg of avgSal){
  totalSal= totalSal+ avg.emp_salary;
}
console.log("Avrage Salary of Wipro & Infy Employess is "+totalSal/avgSal.length);

// const totlSum = avgSal.reduce((accu,emp)=> accu+ emp.emp_salary)

// console.log(totlSum/avgSal.length);