import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b2f9f.firebaseio.com/'
});

export default instance;
