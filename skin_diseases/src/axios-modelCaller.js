import axios from 'axios';

const axiosClientModelCaller = axios.create({
    baseURL: `http://localhost:8000`
});


axiosClientModelCaller.interceptors.request.use((config) => {
    const token = localStorage.getItem('SD_ACCESS_TOKEN')
    // const token = 
    config.headers.Authorization = `Bearer ${token}`

    return config;
})

axiosClientModelCaller.interceptors.response.use((response) => {

    return response;
}, (error) => {
    try {
        const { response } = error;
        console.log("Client error is : "+error);
        if (response && response.status === 401) {
            localStorage.removeItem('SD_ACCESS_TOKEN')
        }
    }catch(e){
        console.error(e);
    }

    throw error;

})

export default axiosClientModelCaller;