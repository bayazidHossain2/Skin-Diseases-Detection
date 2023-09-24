import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`
});


axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('SD_ACCESS_TOKEN')
    // const token = 
    config.headers.Authorization = `Bearer ${token}`

    return config;
})

axiosClient.interceptors.response.use((response) => {

    return response;
}, (error) => {
    try {
        const { response } = error;
        console.log("error is : : : "+error);
        if (response && response.status === 401) {
            localStorage.removeItem('SD_ACCESS_TOKEN')
        }
    }catch(e){
        console.error(e);
    }

    throw error;

})

export default axiosClient;