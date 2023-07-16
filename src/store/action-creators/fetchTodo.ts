import { Dispatch } from "redux";
import { TodoAction, TodoActionTypes } from "../../types/types";
import axios from "axios";

export const fetchTodos = (limit?: number, page?: number, id?: number) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      if (id) {
        var response = await axios.get(
          `http://localhost:8888/todos?userId=${id}`,
          {
            params: { _limit: limit, _page: page },
          }
        );
      } else {
        var response = await axios.get(`http://localhost:8888/todos`, {
          params: { _limit: limit, _page: page },
        });
      }
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: "Something went wrong while loading todos...",
      });
    }
  };
};

export function setTodoPage(num: number) {
  return { type: TodoActionTypes.SET_TODOS_PAGE, payload: num };
}
