import axios from "axios";

const fetchAllParent = () => {
    return axios.get("http://localhost:3002/api/v1/parent/list");
}

export {fetchAllParent};