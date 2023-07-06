import axios from "./axios-costum";

export const getAllClass = async (access_token) => {
  const res = await axios.get("/class/class-list", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return res;
};

export const addClassApi = async (data) => {
  const res = await axios.post("/class/class-add", data);
  return res;
};
