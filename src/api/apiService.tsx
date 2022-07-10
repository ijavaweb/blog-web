import axios from "axios"
const apiService = axios.create ({
    baseURL: "http://www.iweb.fun:8083",
    // baseURL: "http://localhost:8083",
    // headers: {"Content-Type":"application/json"},
    // withCredentials:false,
});


export  {apiService}