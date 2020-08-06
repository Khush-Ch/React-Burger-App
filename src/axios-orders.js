import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-eb3bf.firebaseio.com/'
});

export default  instance;

