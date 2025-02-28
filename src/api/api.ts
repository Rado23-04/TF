import {apiUser} from "./axiosConfig";
import {apiTask} from "./axiosConfig";
export const login = async (email: string, password: string)=>{
    try {
        const response = await apiUser.post('/login', {
            email,
            password
        })
        return response.data
    } catch (error) {
        throw error
    }
}

export const saveUser = async (email: string, password: string, role:string, username:string)=>{
    try {
        const response = await apiUser.post('/save',{
            email,
            password,
            role,
            username
        })
        return response.data
    } catch (error) {
        throw error
    }
}

export const getTasks = async ()=> {
    try{
        const response = await apiTask.get('/task_projections')
        return response.data
    }catch(error){
        throw error;
    }
}