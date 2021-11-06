$(document).ready(onReady)

let employees = [];


function onReady(){
    $('#submit-button').on('click', handleSubmitClick);
};

function renderEmployeesTable(employeesToRender){
    $('#table-body').empty();
    for (let i=0; i<employeesToRender.length; i++) {
    let newTableRow = `
    <tr id = "delete-me">
        <td>${employeesToRender[i].FirstName}</td>
        <td>${employeesToRender[i].LastName}</td>
        <td>${employeesToRender[i].EmployeeID}</td>
        <td>${employeesToRender[i].JobTitle}</td>
        <td>${employeesToRender[i].Salary}</td>
        <td><button class="delete-button" data-index=${i}>${'Delete'}</button></td>
    </tr>
    `;
        $('#table-body').append(newTableRow);
    }
$('.delete-button').on('click', handleDeleteClick);
console.log('employees rendered!')
};

function renderTotalSalary(incomeToSum){
    $('#totalSalary').empty()
    let totalSalary = calculateTotalSalary(incomeToSum);
    $('#totalSalary').text(totalSalary)
};

function calculateTotalSalary(incomeToSum) {
    let sum = 0;
    for (let employee of incomeToSum) {
        sum += employee.Salary;
    }
    return sum;
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
        Salary: Number(newSalary),
    };
    //push New employee object into employee array
    employees.push(newEmployee);

    // clear inputs
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#salary').val('');
    renderEmployeesTable(employees);
    renderTotalSalary(employees);
}

function handleDeleteClick(){
    console.log($(this).data("index"))
    employees.splice($(this).data("index"), 1);
    renderEmployeesTable(employees)
    renderTotalSalary(employees);
    console.log(employees)
}
