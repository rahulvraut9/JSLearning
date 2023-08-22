class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company =emp_company;
    }
}

const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_vinay = new Employee(88,"Vinay","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahi","HR",85000,"Infy");

array_employee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];
console.log(`-----------Employee Works in TCS-----------`);

for(let employee of array_employee){
    if(employee.emp_company=='TCS'){
        console.log(`Employee Name : ${employee.emp_name}, Company : ${employee.emp_company}`);
    }
}
console.log(`-----------Employee Works in Finance Department-----------`);
for(let employee of array_employee){
    if(employee.emp_dept=='Finance'){
        console.log(`Employee Name : ${employee.emp_name}, Department : ${employee.emp_dept}`);
    }
}
console.log(`-----------Employee Name Starts With "R"-----------`);
for(let employee of array_employee){
    if(employee.emp_name.startsWith("R")){
        console.log(`Employee Name : ${employee.emp_name}, Department : ${employee.emp_dept}, Salary : ${employee.emp_salary}, Company : ${employee.emp_company}`);
    }
}
console.log(`-----------Employee Salary Grater Than 75000-----------`);
for(let employee of array_employee){
    if(employee.emp_salary>75000){
        console.log(`Employee Name : ${employee.emp_name}, Salary : ${employee.emp_salary}, Company : ${employee.emp_company}`);
    }
}
console.log(`-----------Employee Salary Grater Than 50000 And Dept. is IT-----------`);
for(let employee of array_employee){
    if(employee.emp_salary>50000 && employee.emp_dept=='IT'){
        console.log(`Employee Name : ${employee.emp_name}, Department : ${employee.emp_dept}, Salary : ${employee.emp_salary}, Company : ${employee.emp_company}`);
    }
}
console.log(`-----------Employee Works in Infy-----------`);

for(let employee of array_employee){
    if(employee.emp_company=='Infy'){
        console.log(`Employee Name : ${employee.emp_name}, Department : ${employee.emp_dept}, Salary : ${employee.emp_salary}, Company : ${employee.emp_company}`);
    }
}
