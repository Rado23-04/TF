import api from "./axiosConfig";

export const login = async (email: string, password: string){
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