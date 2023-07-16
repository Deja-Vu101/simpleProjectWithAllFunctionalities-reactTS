import Header from "../components/Header";
import { useActions } from "../hooks/useActions";
import { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import List from "../components/List";
import { ITodo } from "../types/types";
import TodoItem from "../components/TodoItem";
import Pages from "../components/Pages";
import EmptyList from "../components/EmptyList";
import BigLoader from "../components/loaders/BigLoader";

const AllTodos = () => {
  const { todos, error, loading, hiddenPost, limit, page } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodoPage, patchTodosStatus } = useActions();

  useEffect(() => {
    fetchTodos(limit, page);
  }, [page]);

  const handleCheckBoxTodo = (id: number, data: boolean) => {
    patchTodosStatus(id, !data);
  };

  const setPage = (page: number) => {
    setTodoPage(page);
  };

  return (
    <>
      <Header />
      {!error ? (
        loading ? (
          <BigLoader />
        ) : (
          <div className="AllTodos">
            <div className="AllTodoItem">
              <div className="AllTodoList">
                <List
                  items={todos}
                  renderItem={(todos: ITodo) => (
                    <TodoItem
                      key={todos.id}
                      todos={todos}
                      handleCheckBoxTodo={handleCheckBoxTodo}
                      hiddenStatus={false}
                    />
                  )}
                />
              </div>
              <div className="AllTodoFooter">
                {todos.length == 0 ? (
                  <EmptyList title="No more todos!" />
                ) : null}
                <Pages length={todos.length} page={page} setPage={setPage} />
              </div>
            </div>
          </div>
        )
      ) : (
        error
      )}
    </>
  );
};

export default AllTodos;
