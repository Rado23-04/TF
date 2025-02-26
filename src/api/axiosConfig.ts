import axios from 'axios';
export const apiUser = axios.create({
    baseURL : "http://localhost:8081/auth",   
    headers: {
        "Content-Type": "application/json"
    },
})

export const apiTask = axios.create({
    baseURL :"http://localhost:8081/task",
    headers:{
        "Content-Type": "application/json"
    },
})

apiUser.interceptors.request.use(
    (config) =>{
        const token= localStorage.getItem("jwt");
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) =>{
        return Promise.reject(error);
    }
)

