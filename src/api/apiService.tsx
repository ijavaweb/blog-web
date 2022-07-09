import axios from "axios"
const apiService = axios.create ({
    baseURL: "http://localhost:8083",
    // headers: {"Content-Type":"application/json"},
    // withCredentials:false,
});


export  {apiService}