/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../service/userService";
import * as Type from "../Type/userType";
import { toast } from "react-toastify";

export const handleLoginRedux = (email, password) => {
  return async (dispatch, getState) => {
    dispatch({ type: Type.LOGIN_USER });

    try {
      const res = await loginUser(email, password);
      if (res && res.token) {
        dispatch({
          type: Type.LOGIN_USER_SUCCESS,
          data: res.account,
        });
        localStorage.setItem("access_token", res.token);
        return res.account;
      } else {
        throw new Error("Đăng nhập thất bại");
      }
    } catch (err) {
      dispatch({ type: Type.LOGIN_USER_ERROR });
      throw err;
    }
  };
};

export const handleLogoutRedux = () => {
  return async (dispatch, getState) => {
    dispatch({ type: Type.LOGOUT_USER });
    localStorage.removeItem("access_token");
  };
};
