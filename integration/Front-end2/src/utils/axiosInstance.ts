import axios from 'axios';
 
const Axios = axios.create({
    baseURL: 'http://localhost:8000/todo', // Base Backend server url
});
 
export { Axios };