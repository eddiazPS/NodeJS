import axios from 'axios';

const getUsers = async url => {
    //const url = 'https://jsonplaceholder.typicode.com/users/';
    const result = await axios.get(url);
    return result.data;
};

const getUsersById = async (id,url) => {
    //const url = 'https://jsonplaceholder.typicode.com/users/';
    const result = await axios.get(`${url}${id}`);
    return result.data;
};

export {getUsers, getUsersById};