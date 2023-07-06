import * as Type from "../Type/teacherType";

const initialState = {
  ListTeacher: [],
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.TEACHER_FETCH:
      return {
        ...state,
        ListTeacher: [],
        isLoading: true,
      };
    case Type.TEACHER_SUCCESS:
      return {
        ...state,
        ListTeacher: action.listTeacher,
        isLoading: false,
      };
    case Type.TEACHER_ERROR:
      return {
        ...state,
        ListTeacher: [],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default classReducer;
