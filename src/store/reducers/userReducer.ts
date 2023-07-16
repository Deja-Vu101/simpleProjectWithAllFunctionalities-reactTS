import { UserAction, UserActionTypes } from "./../../types/types";
import { IUserState } from "../../types/types";
import { IUser } from "../../types";

const initialState: IUserState = {
  users: [],
  user: {} as IUser,
  loading: false,
  error: null,
};

export const useReducer = (
  state = initialState,
  action: UserAction
): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { users: [], loading: true, error: null, user: null };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { users: action.payload, loading: false, error: null, user: null };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { users: [], loading: false, error: action.payload, user: null };
    case UserActionTypes.FETCH_USER_PAGE_SUCCESS:
      return { users: [], loading: false, user: action.payload, error: "" };
    default:
      return state;
  }
};
