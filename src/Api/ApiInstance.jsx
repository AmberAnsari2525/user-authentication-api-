import axios from 'axios';

// Create an Axios instance with default configuration
const ApiAxios = axios.create({
    baseURL: 'https://jwtauth.techxdeveloper.com/api', // Base URL
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor
ApiAxios.interceptors.request.use((config) => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

// Response interceptor
ApiAxios.interceptors.response.use((response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            return Promise.reject(error.response.data);
        }
        else if (error.request){
            return Promise.reject(error.request);
        }
        else {
            return Promise.reject(error.message);
        }

    }
);

export default ApiAxios;
