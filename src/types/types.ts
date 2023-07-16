import { IUser } from "../types";

export interface IUserState {
  users: any[];
  user: IUser | null;
  loading: boolean;
  error: null | string;
}
export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  FETCH_USER_PAGE_SUCCESS = "FETCH_USER_PAGE_SUCCESS",
}
interface IFetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}
interface IFetchSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface IFetchUserPageAction {
  type: UserActionTypes.FETCH_USER_PAGE_SUCCESS;
  payload: IUser;
}
interface IFetchErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}
export type UserAction =
  | IFetchUsersAction
  | IFetchSuccessAction
  | IFetchErrorAction
  | IFetchUserPageAction;

// TODO page

export interface ITodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
  hiddenPost: boolean;
}
export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODOS_PAGE = "SET_TODOS_PAGE",
  HANDLE_TODO_CHECKBOX = "HANDLE_TODO_CHECKBOX",
  PATCH_TODOS_SUCCESS = "PATCH_TODOS_SUCCESS",
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS;
}
interface FetchSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}
interface PatchTodoStatusSuccessAction {
  type: TodoActionTypes.PATCH_TODOS_SUCCESS;
  payload: any;
}
interface FetchErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}
interface SetTodosPageAction {
  type: TodoActionTypes.SET_TODOS_PAGE;
  payload: number;
}
interface HandleTodoCheckbox {
  type: TodoActionTypes.HANDLE_TODO_CHECKBOX;
  payload: number;
}

export type TodoAction =
  | FetchTodoAction
  | FetchSuccessAction
  | FetchErrorAction
  | SetTodosPageAction
  | HandleTodoCheckbox
  | PatchTodoStatusSuccessAction;

// POST page

export interface IPostState {
  posts: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
  hiddenTodo: boolean;
}

export enum PostActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
  SET_POSTS_PAGE = "SET_POSTS_PAGE",
}

interface SetPostsPage {
  type: PostActionTypes.SET_POSTS_PAGE;
  payload: number;
}
interface FetchPostsAction {
  type: PostActionTypes.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
  type: PostActionTypes.FETCH_POSTS_SUCCESS;
  payload: [];
}
interface FetchPostsErrorAction {
  type: PostActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

export type PostsAction =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction
  | SetPostsPage;
