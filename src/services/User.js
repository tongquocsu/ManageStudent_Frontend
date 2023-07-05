import axios from "./axiosCustom";
export const loginUser = async (emailOrUsername, password) => {
  const response = await axios.post("/auth/account/login", {
    emailOrUsername,
    password,
  });
  return response;
};

export const getAllUser = async (access_token) => {
  const res = await axios.get("/user-account/list", {
    headers: {
      token: `Beerer ${access_token}`,
    },
  });
  return res;
};
