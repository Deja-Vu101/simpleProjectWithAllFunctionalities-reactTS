import axios, { AxiosPromise } from "axios";
import { ITodo, TodoAction, TodoActionTypes } from "../../types/types";
import { Dispatch } from "redux";

export const patchTodosStatus = (idTodo: number, changedData: boolean) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      const res = await axios.patch<AxiosPromise<ITodo>>(
        `http://localhost:8888/todos/${idTodo}`,
        { completed: changedData }
      );

      dispatch({
        type: TodoActionTypes.PATCH_TODOS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
