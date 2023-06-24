class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }
  printData(){
    const employeeList = document.getElementById('employeeList');
    const listItem = document.createElement('li');
    listItem.innerText = `Id: ${this.id} Name: ${this.name} Department: ${this.department} Salary: ${this.salary}`;
    employeeList.appendChild(listItem);

  }
}

function submitFunction(){

    let id = document.getElementById("employeeID").value
    let name = document.getElementById("employeeName").value
    let department = document.getElementById("employeeDepartment").value
    let salary = document.getElementById("employeeSalary").value

    if(id && name && department && salary){
        const employee = new Employee(id, name, department, salary);
        employee.printData();

  
    }else{
        alert("All fields are requied!")
    }


}

  