import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/types";
import axios from "axios";

export const fetchUserPage = (id: number) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const res = await axios.get(`http://localhost:8888/users/${id}`);
      dispatch({
        type: UserActionTypes.FETCH_USER_PAGE_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
