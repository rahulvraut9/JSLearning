let profrssor ={
    name : "Dhondiram Chaburav Nakmode",
    degree : {
        enginering : "CSE",
        PostGraduation : "CSE-Js",
        phd : "Data Scintist",
        show : function(){
            console.log(`Degrees : ${this.enginering}, ${this.PostGraduation}, ${this.phd}`);
    }
    },
    certificates: ["HackerRank Participation","IFE Certificatin ","Advance Programing Certification"],
   
}
console.log(`This is Object : ${profrssor.name} , ${profrssor.degree.enginering}, ${profrssor.degree.PostGraduation}, ${profrssor.degree.phd},`);
profrssor.degree.show();
profrssor.totalExperiance = "14Years";
console.log(`Total Experiance is : ${profrssor.totalExperiance}`);
profrssor.degree.PostGraduation = "PG DWDM";
console.log(`Updated Object : ${profrssor.name} , ${profrssor.degree.enginering}, ${profrssor.degree.PostGraduation}, ${profrssor.degree.phd},`);
profrssor.certificates.push("Oracle Certified")
console.log(`Last element of certificate : ${profrssor.certificates[profrssor.certificates.length-1]}`);


 
