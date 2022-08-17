// declare the variable 
const employee={
    name : "Sam",
    streetAddress : '11 Broadway'
}
// function   updateEmployeeWithKeyAndValue(employee, key, value)

function   updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee ={...employee}
    newEmployee[key]  = value
    return newEmployee
}
// function   destructivelyupdateEmployeeWithKeyAndValue(employee, key, value)
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value
    return employee
}
// function deleteFromEmployeeByKey(employee, key)
function deleteFromEmployeeByKey(employee, key){
    const newEmployee= {...employee}
    delete newEmployee[key]
    return newEmployee
}
// deleteFromEmployeeByKey(employee, key)
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}