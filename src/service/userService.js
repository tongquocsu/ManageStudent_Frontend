import axios from "./axios-costum.js";

export const loginUser = async (emailOrUsername, password) => {
  const response = await axios.post("/auth/account/login", {
    emailOrUsername,
    password,
  });
  return response;
};
