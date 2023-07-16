import * as UserActionCreators from "../store/action-creators/fetchUsers";
import * as TodoActionCreators from "../store/action-creators/fetchTodo";
import * as PostsActionCreators from "../store/action-creators/fetchPosts";
import * as PatchTodoStatusAC from "../store/action-creators/patchTodosStatus";
import * as FetchUserPageAC from "../store/action-creators/fetchUserPage";

export default {
  ...UserActionCreators,
  ...TodoActionCreators,
  ...PostsActionCreators,
  ...PatchTodoStatusAC,
  ...FetchUserPageAC,
};
