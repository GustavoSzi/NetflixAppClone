import { AUTHENTICATE, TRIED_AL, LOGOUT } from "../actions/auth";

const INITIAL_STATE = {
  isLoggedIn: false,
  token: null,
  userId: null,
  triedAutoLogin: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      const newState = {
        ...state,
        isLoggedIn: true,
        token: action.token,
        userId: action.userId,
      };
      return newState;
    case TRIED_AL:
      return { ...state, triedAutoLogin: true };
    case LOGOUT:
      // console.log(state);
      return { ...INITIAL_STATE, triedAutoLogin: true };
    default:
      return state;
  }
};
