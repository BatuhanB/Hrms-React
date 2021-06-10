import axios from "axios"


export default class jobAdvertService  {
   getJobAdvertList(){
       return axios.get("http://localhost:8080/api/jobadds/getall")
   }
}