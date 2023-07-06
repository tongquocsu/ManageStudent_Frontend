import * as Type from "../Type/schoolType";

const initialState = {
  ListSchool: [],
};

const schoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.SCHOOL_FETCH:
      return {
        ...state,
        ListSchool: [],
        isLoading: true,
      };
    case Type.SCHOOL_SUCCESS:
      return {
        ...state,
        ListSchool: action.listSchool,
        isLoading: false,
      };
    case Type.SCHOOL_ERROR:
      return {
        ...state,
        ListSchool: [],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default schoolReducer;
