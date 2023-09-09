class Employee{

    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){

         this.emp_id=emp_id;

         this.emp_name=emp_name;

         this.emp_dept=emp_dept;

         this.emp_salary=emp_salary;

         this.emp_company=emp_company;

        // countEmp++;

    }

    show()
    {
        console.log(`The employee Details are : ${this.emp_id},${this.emp_name},${this.emp_dept},${this.emp_salary},${this.emp_company}`);
    }
}

const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny= new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy");

const array_emps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

const employeeNames = array_emps.map(empNames=>{
    return empNames.emp_name;
})
console.log(`Name Of Emplyess : ${employeeNames}`);

const employeDepartments = array_emps.map(departments=>{
    return departments.emp_dept
})
console.log(`List of Departments : ${employeDepartments}`);

const employeId = array_emps.map(empid=>{
    return empid.emp_id
})
console.log(`List of Emplyee id's : ${employeId}`);