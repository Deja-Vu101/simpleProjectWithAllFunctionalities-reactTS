import axios from "axios";
import { PostActionTypes, PostsAction } from "../../types/types";
import { Dispatch } from "redux";

export const fetchPosts = (page: number, limit: number, id?: number) => {
  return async (dispatch: Dispatch<PostsAction>) => {
    try {
      dispatch({ type: PostActionTypes.FETCH_POSTS });
      if (id) {
        var response = await axios.get(
          `http://localhost:8888/posts?userId=${id}`,
          {
            params: { _limit: limit, _page: page },
          }
        );
      } else {
        var response = await axios.get(`http://localhost:8888/posts`, {
          params: { _limit: limit, _page: page },
        });
      }
      dispatch({
        type: PostActionTypes.FETCH_POSTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: "Something went wrong during loading user posts...",
      });
    }
  };
};

export function setPostsPage(page: number) {
  return { type: PostActionTypes.SET_POSTS_PAGE, payload: page };
}
