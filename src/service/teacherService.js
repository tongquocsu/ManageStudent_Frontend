import axios from "axios";

const fetchAllParent = () => {
    return axios.get("http://localhost:3002/api/v1/teacher/list");
}

export {fetchAllParent};
// import axios from "./axios-costum";

// export const getAllTeacher = async () => {
//   const res = await axios.get("/student/list");
//   return res;
// };