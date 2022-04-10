import * as actionTypes from "./actionTypes";

const initialStateAuth = {
  signedIn: false,
  user: "",
  token: "",
  authLoading: false,
  error: "",
};

const initialStateData = {
  data: [],
};

export const authReducer = (state = initialStateAuth, action) => {
  const { payload } = action;

  switch (action.type) {
    case actionTypes.SIGNEDIN:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        signedIn: true,
      };

    default:
      return state;
  }
};

export const dataReducer = (state = initialStateData, action) => {
  const { payload } = action;

  switch (action.type) {
    case actionTypes.RESTRAUNTS:
      return {
        ...state,
        data: payload,
      };

    default:
      return state;
  }
};
