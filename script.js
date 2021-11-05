$(document).ready(onReady)

console.log('js is ready!')

let employees = [];

function onReady(){
    console.log ('jq is ready!')
    $('#submit-button').on('click', handleSubmitClick);
}

function handleSubmitClick(){
    // grab the values user has entered in inputs
    let newFirstName = $('#firstName').val();
    let newLastName= $('#lastName').val();
    let newEmployeeID = $('#idNumber').val();
    let newJobTitle = $('#jobTitle').val();
    let newSalary = $('#salary').val();

  // create a new "employee" object using above values
    let newEmployee = {
        FirstName: newFirstName,
        LastName: newLastName,
        EmployeeID: newEmployeeID,
        JobTitle: newJobTitle,
        Salary: newSalary,
    };
    console.log(newEmployee)
}