import axios from "axios"
const apiService = axios.create ({
    baseURL: "http://8.219.102.98:8083",
    // baseURL: "http://localhost:8083",
    // headers: {"Content-Type":"application/json"},
    // withCredentials:false,
});


export  {apiService}