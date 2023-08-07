console.log(`---------------------Task 1---------------------------`);
class Vechile{
    constructor(name,modelName,color,price,mileage){
        this.name =name;
        this.modelName = modelName;
        this.color = color;
        this.price = price;
        this.mileage = mileage;
    }
}
let bmwCar = new Vechile("BMW","BM200","White",25000,30);
let marutiSuzuki = new Vechile("Marko","KM755","Blue",35000,40);
let tata = new Vechile("Safari","Jl333","SKYBLUE",22000,20);
let farari = new Vechile("Farari","FF30","Magneta",24000,35);
let lamborgini = new Vechile("Lamborgini","LAM200","Orange",27000,20);

arrayOfObject = [bmwCar,marutiSuzuki,tata,farari,lamborgini];
for(const list of arrayOfObject){
   console.log(`Vachile Name : ${list.name},   ModelNo : ${list.modelName},   Color : ${list.color},    Price : ${list.price},   Mileage : ${list.mileage}`);
}
console.log(`---------------------Task 2---------------------------`);
class College{
    constructor(name,principal,course,students){
        this.name = name;
        this.principal = principal;
        this.course = course;
        this.students = students;
    }
    display(){
        console.log(`College Name : ${this.name}| Principal : ${this.principal}| Course Name : ${this.course}| No.Of Students : ${this.students}`);
    }
}
let clg =  new College("SPP,Pune","Ashant Prashant","BCA",2000);
clg.display();
let clg2 =  new College("SPP,Mumbai","Shant Prashant","MCA",2020);
clg.display();
let clg3 =  new College("SPP,Beed","Dhigana Prashant","M.Tec",2030);
clg.display();
let clg4 =  new College("SPP,Jalna","Dhmal Prashant","B.Tec",2040);
clg.display();

console.log(`---------------------Task 3---------------------------`);
function traverseObject(obj){
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.table(`Key : ${key} --------- Values : ${element}`)  
    }
  }
}
traverseObject(clg);


