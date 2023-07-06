/* eslint-disable no-unused-vars */
import { getAllSchool } from "../../service/schoolService";
import * as Type from "../Type/schoolType";

export const getAllSchoolRedux = (token) => {
  return async (dispatch, getState) => {
    dispatch({ type: Type.SCHOOL_FETCH });
    try {
      const res = await getAllSchool(token);
      console.log(res);
      if (res) {
        dispatch({
          type: Type.SCHOOL_SUCCESS,
          listSchool: res.schools,
        });
      }
    } catch (err) {
      dispatch({ type: Type.SCHOOL_ERROR });
      throw err;
    }
  };
};
