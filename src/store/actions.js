import * as actionTypes from "./actionTypes";
import axios from "axios";

export const SignedIn = (data) => ({
  type: actionTypes.SIGNEDIN,
  payload: data,
});

export const restraunts = (data) => ({
  type: actionTypes.RESTRAUNTS,
  payload: data,
});

export const signIn = (data) => async (dispatch) => {
  await axios
    .post("/api/auth/sign-in", {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      if (res.data && res.data.token) {
        return dispatch(
          SignedIn({ user: res.data.user, token: res.data.token })
        );
      }
    })
    .catch((err) => console.log(err));
};
