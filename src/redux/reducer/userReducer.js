import * as Type from "../Type/userType";

const initialState = {
  loggedIn: false,
  account: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.LOGIN_USER:
      return {
        ...state,
        loggedIn: true,
        account: action.data,
      };
    case Type.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        account: action.data,
      };
    case Type.LOGIN_USER_ERROR:
      return {
        ...state,
        loggedIn: false,
        account: action.data,
      };
    case Type.LOGOUT_USER:
      return {
        ...state,
        loggedIn: false,
        account: null,
      };
    default:
      return state;
  }
};

export default userReducer;
