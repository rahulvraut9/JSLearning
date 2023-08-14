  let employeeInfoJson = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["DEV", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
      "street": "32, Laham St.",
      "city": "Innsbruck",
      "country": "Austria"
    },
    "referredBy": "EM0012"
  }
  `
  const employee = JSON.parse(employeeInfoJson);
  const arrayRole = employee.role;
  for (const role of arrayRole) {
        if(role=="DEV"){
            console.log(`The role is : ${role}`);
        }
  }

 
  let last = employee.name.split(" ");
  console.log(`The last name is : ${last[1]}`);

  let date = new Date(employee.doj);
  let year = date.getFullYear();
  console.log(`Year of Joining ${year}`);