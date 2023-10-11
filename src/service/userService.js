import axios from "./axios-costum.js";

export const loginUser = async (emailOrUsername, password) => {
  return await axios.post("/auth/account/login", {
    emailOrUsername,
    password,
  });
};
