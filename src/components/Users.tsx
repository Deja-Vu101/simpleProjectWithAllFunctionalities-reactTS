import { IUser } from "../types";
import List from "./List";
import UserItem from "./UserItem";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useState } from "react";
import PostSection from "./PostSection";
import TodoSection from "./TodoSection";
import SearchUsers from "./SearchUsers/SearchUsers";

interface UsersProps {
  users: IUser[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  const { fetchPosts, fetchTodos, patchTodosStatus } = useActions();

  const [showPostDiv, setShowPostDiv] = useState(false);
  const [showTodoDiv, setShowTodoDiv] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [filtredUserName, setFiltredUserName] = useState<any>(
    inputValue ? [] : users
  );

  const toggleSecondDiv = (com: string) => {
    if (com === "post") {
      setShowTodoDiv(false);
      setShowPostDiv(true);
    } else {
      setShowPostDiv(false);
      setShowTodoDiv(true);
    }
  };

  const { posts, error, loading, page, limit } = useTypedSelector(
    (state) => state.post
  );
  const {
    todos,
    limit: todosLimit,
    page: todosPage,
    error: errorTodos,
    loading: loadingTodos,
  } = useTypedSelector((state) => state.todo);

  const [hiddenStatus, setHiddenStatus] = useState({
    todos: true,
    posts: true,
  });

  const showPosts = (id: number) => {
    setHiddenStatus({ posts: false, todos: true });
    fetchPosts(page, limit, id);

    toggleSecondDiv("post");
  };
  const showTodos = (id: number) => {
    setHiddenStatus({ todos: false, posts: true });
    fetchTodos(limit, page, id);

    toggleSecondDiv("todo");
  };

  const handleCheckBoxTodo = (id: number, data: boolean) => {
    patchTodosStatus(id, !data);
  };

  const onChangeSearchUsers = (name: string) => {
    setInputValue(name);

    const usersFound = users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );

    setFiltredUserName(usersFound);
  };

  console.log(todos, "todos");

  return (
    <>
      <div className="UsersPage">
        <div className="userItem">
          <SearchUsers
            onChangeSearchUsers={onChangeSearchUsers}
            inputValue={inputValue}
          />
          <List
            items={filtredUserName}
            renderItem={(users: IUser) => (
              <UserItem
                key={users.id}
                user={users}
                showPosts={showPosts}
                showTodos={showTodos}
                hiddenStatus={hiddenStatus}
                //handleCheckBoxTodo={handleCheckBoxTodo}
                showTodoDiv={showTodoDiv}
              />
            )}
          />
        </div>

        <div className="secondDivTodoOrPost">
          <PostSection
            showPostDiv={showPostDiv}
            error={error}
            loading={loading}
            posts={posts}
            hiddenStatus={hiddenStatus}
          />
          <TodoSection
            showTodoDiv={showTodoDiv}
            errorTodos={errorTodos}
            loadingTodos={loadingTodos}
            todos={todos}
            hiddenStatus={hiddenStatus}
            handleCheckBoxTodo={handleCheckBoxTodo}
          />
        </div>
      </div>
    </>
  );
};

export default Users;
