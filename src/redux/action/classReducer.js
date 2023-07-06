/* eslint-disable no-unused-vars */
import { getAllClass } from "../../service/classService";
import * as Type from "../Type/classType";

export const getAllClassRedux = (token) => {
  return async (dispatch, getState) => {
    dispatch({ type: Type.CLASS_FETCH });
    try {
      const res = await getAllClass(token);
      console.log(res);
      if (res) {
        dispatch({
          type: Type.CLASS_SUCCESS,
          listClass: res.classes,
        });
      }
    } catch (err) {
      dispatch({ type: Type.CLASS_ERROR });
      throw err;
    }
  };
};
