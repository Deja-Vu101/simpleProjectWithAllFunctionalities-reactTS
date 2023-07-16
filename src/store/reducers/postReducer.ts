import { IPostState, PostActionTypes, PostsAction } from "./../../types/types";

const initialState: IPostState = {
  posts: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
  hiddenTodo: false,
};

export const postReducer = (
  state = initialState,
  action: PostsAction
): IPostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return { ...state, loading: true };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false };
    case PostActionTypes.FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PostActionTypes.SET_POSTS_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
