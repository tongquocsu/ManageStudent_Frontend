import axios from 'axios';

const getAllUsers = (inputId) =>{
    return axios.get(`/api/get-all-users?id=${inputId}`)
    }

export default getAllUsers;