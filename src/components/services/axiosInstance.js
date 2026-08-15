import axios from 'axios'
import { serverURL } from './serverURL';

const axiosInstance = axios.create({
    baseURL: serverURL,
    timeout: 10000
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("token")
        if(token){
            config.headers.Authorization = `bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// response interceptors
axiosInstance.interceptors.response.use(
    (response) => {
        console.log("response Recieved!!!");
        return response
    },
    (error) => {
        if (error.response) {
            const status = error.response.status
            if (status == 401) {
                console.log("Unauthorised Access - Redirect to Login!!");
            } else if (status == 404) {
                console.log("API Not Found!!");
            } else if (status == 500) {
                console.log("Server Error!!!");
            } else if (error.request) {
                console.log("No Response from server..");
            } else {
                console.log("Error : " + error.message);
            }
            return Promise.reject(error);
        }
    }
)

export default axiosInstance