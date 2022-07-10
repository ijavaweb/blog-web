import axios from "axios"
const apiService = axios.create ({
    baseURL: "",
    // headers: {"Content-Type":"application/json"},
    // withCredentials:false,
});


export  {apiService}