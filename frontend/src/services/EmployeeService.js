import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;



export function getEmployees() {
  return axios.get(apiUrl)
    .then(response => response.data)
}


export function deleteEmployee(employeeId) {
  return axios.delete(apiUrl + employeeId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}


export function addEmployee(newEmployeeData){
  return axios.post(apiUrl, {
    employeeId:null,
    name:newEmployeeData.name,
    email:newEmployeeData.email,
    password:newEmployeeData.password,
  })
    .then(response=>response.data)
    
}


export function updateEmployee(employeeId, employee) {
  return axios.put(apiUrl + employeeId + '/', {
    name:employee.name,
    email:employee.email,
    password:employee.password,
  })
   .then(response => response.data)
}



