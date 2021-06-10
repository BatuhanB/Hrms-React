import axios from "axios"

export default class employeeService  {
   getEmployees(){
       return axios.get("http://localhost:8080/api/employees/getAll")
   }
}
