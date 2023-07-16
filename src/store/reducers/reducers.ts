import { combineReducers } from "redux";
import { useReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";
import { postReducer } from "./postReducer";

export const rootReducer = combineReducers({
  user: useReducer,
  todo: todoReducer,
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
