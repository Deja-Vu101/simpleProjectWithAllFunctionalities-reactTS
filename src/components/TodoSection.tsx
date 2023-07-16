import { ITodo } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";
import BigLoader from "./loaders/BigLoader";

interface TodoSectionProps {
  showTodoDiv: boolean;
  errorTodos: string | null;
  loadingTodos: boolean;
  todos: any[];
  hiddenStatus: any;
  handleCheckBoxTodo: (id: number, data: boolean) => void;
}

const TodoSection: React.FC<TodoSectionProps> = ({
  showTodoDiv,
  errorTodos,
  loadingTodos,
  todos,
  hiddenStatus,
  handleCheckBoxTodo,
}) => {
  return (
    <>
      {showTodoDiv ?? !errorTodos ? (
        loadingTodos ? (
          <BigLoader />
        ) : (
          <List
            items={todos}
            renderItem={(todos: ITodo) => (
              <TodoItem
                key={todos.id}
                todos={todos}
                hiddenStatus={hiddenStatus}
                handleCheckBoxTodo={handleCheckBoxTodo}
              />
            )}
          />
        )
      ) : (
        errorTodos
      )}
    </>
  );
};

export default TodoSection;
