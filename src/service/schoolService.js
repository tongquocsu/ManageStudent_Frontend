import axios from "./axios-costum";

export const getAllSchool = async (access_token) => {
  const res = axios.get("/school/school-list", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return res;
};
