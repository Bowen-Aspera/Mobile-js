import axios from 'axios';
axios.defaults.baseURL = 'https://api.example.com'; // url sa localhost 
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;