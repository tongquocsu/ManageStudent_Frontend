import axios from "./axios-costum";

export const getListStudent = async (access_token) => {
  const response = await axios.get("/student/list", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response;
};
