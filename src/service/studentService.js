import axios from "axios";

const fetchAllStudent = () => {
    return axios.get("http://localhost:3002/api/v1/student/list");
}

export {fetchAllStudent};