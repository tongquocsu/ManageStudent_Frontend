import * as Type from "../Type/classType";

const initialState = {
  ListClass: [],
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.CLASS_FETCH:
      return {
        ...state,
        ListClass: [],
        isLoading: true,
      };
    case Type.CLASS_SUCCESS:
      return {
        ...state,
        ListClass: action.listClass,
        isLoading: false,
      };
    case Type.CLASS_ERROR:
      return {
        ...state,
        ListClass: [],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default classReducer;
