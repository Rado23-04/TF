import api from "./axiosConfig";

export const login = async (email: string, password: string)=>{
    try {
        const response = await api.post('/login', {
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
        const response = await api.post('/save',{
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