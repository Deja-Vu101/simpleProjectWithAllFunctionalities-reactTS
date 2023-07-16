import axios from "axios";
import { UserAction, UserActionTypes } from "../../types/types";
import { Dispatch } from "redux";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get("http://localhost:8888/users");
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Something went wrong while loading users...",
      });
    }
  };
};
