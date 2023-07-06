import axios from "./axios-costum";

export const getAllTeacher = async () => {
  const res = await axios.get("/student/list");
  return res;
};
