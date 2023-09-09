const array = [1,2,3,5,7,9];

const squareofArray = array.map((currentvalue,index,array)=>{
    return currentvalue*currentvalue;
})
console.log(squareofArray);
console.log(`========================================================`);
class Student {
    constructor(fullName, rollNo, college, emailId, mobile ){
      this.fullName = fullName;
      this.rollNo = rollNo;
      this.college = college;
      this.emailId = emailId;
      this.mobile = mobile;
    }
    show(){
      console.log(`Student Details is Full Name: ${this.fullName} , Roll Number: ${this.rollNo}
      College Name: ${this.college}, Email Id: ${this.emailId}, Mobile : ${this.mobile}`);
    }
  }
  
  let studentJenny = new Student("Jenny Gates", 11, "COEP Pune", "abc@gmail.com", "9096 78 6789");
  let studentStew = new Student("Stew Page", 22, "JSPM", "stew@gmail.com", "9867 8989 98");
  let studentElon = new Student("Elon Musk", 33, "Standford", "stew@gmail.com", "9867 8989 98");
  let studentSatya = new Student("Satya Nadella", 44, "ABC", "stya@gmail.com", "9867 8989 98");
  let studentSundar = new Student("Sundar Pichai", 55, "XYZ", "sundar@gmail.com", "9867 8989 98");
  
  const arrayStudent = [studentJenny,studentStew, studentElon, studentSatya, studentSundar  ];
  const arrayStudentNames =arrayStudent.map(student=>{
    return student.fullName
  });
  console.log(`Name of Sudents: ${arrayStudentNames}`);