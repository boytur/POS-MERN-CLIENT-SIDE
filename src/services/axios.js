import axios from "axios"
const API = import.meta.env.VITE_POSYAYEE_API_KEY

const instance = axios.create({
    withCredentials: true,
    baseURL: API
})

export default instance;