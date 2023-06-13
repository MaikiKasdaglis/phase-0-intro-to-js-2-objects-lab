// Write your solution in this file!
const employee = {
    name: "Penguin",
    streetAddress: "north pole",
}

// function updateEmployeeWithKeyAndValue(obj, key, value) {
//     let newNew = {...obj}
//     return newNew.key = value 

// }

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
         obj[key] = value 
         return obj 
  }

  function deleteFromEmployeeByKey(obj, key) {
   const newNew = {...obj,}
    delete newNew[key]
    return newNew
  }

  function  destructivelyDeleteFromEmployeeByKey(obj, key) {
         delete obj[key]
         return obj
  }