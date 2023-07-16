import { ITodoState, TodoAction, TodoActionTypes } from "../../types/types";

const initialState: ITodoState = {
  todos: [],
  loading: false,
  error: null,
  limit: 10,
  page: 1,
  hiddenPost: true,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): ITodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };

    case TodoActionTypes.PATCH_TODOS_SUCCESS:
      const updatedTodo = action.payload;
      const todosModified = state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );

      return {
        ...state,
        todos: todosModified,
      };

    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActionTypes.SET_TODOS_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
