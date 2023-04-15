let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    const developers = arr.map((employee) => {
      if (employee.profession === "developer") {
        return employee;
      }
    });
    console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    const developers = [];
    arr.forEach((employee) => {
      if (employee.profession === "developer") {
        developers.push(employee);
      }
    });
    console.log(developers);
  }
  
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    const filteredArray = arr.filter((employee) => {
      return employee.profession !== "admin";
    });
    console.log(filteredArray);
  }
  
  function concatenateArray() {
    const newArray = [
      { id: 4, name: "bob", age: "21", profession: "designer" },
      { id: 5, name: "jane", age: "22", profession: "marketer" },
      { id: 6, name: "sam", age: "23", profession: "developer" },
    ];
    const combinedArray = arr.concat(newArray);
    console.log(combinedArray);
  }