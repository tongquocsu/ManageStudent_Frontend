/* eslint-disable no-unused-vars */

import { getAllSchool } from "../../service/schoolService";
import * as Type from "../Type/teacherType";

export const getAllTeacherRedux = (token) => {
  return async (dispatch, getState) => {
    dispatch({ type: Type.TEACHER_FETCH });
    try {
      const res = await getAllSchool(token);
      console.log(res);
      if (res) {
        dispatch({
          type: Type.TEACHER_SUCCESS,
          listTeacher: res,
        });
      }
    } catch (err) {
      dispatch({ type: Type.TEACHER_ERROR });
      throw err;
    }
  };
};
