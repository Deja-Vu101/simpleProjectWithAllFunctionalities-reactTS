import { ITodo } from "../types/types";

interface ITodoProps {
  todos: ITodo;
  hiddenStatus: any;
  handleCheckBoxTodo: (id: number, data: boolean) => void;
}

const TodoItem: React.FC<ITodoProps> = ({
  todos,
  hiddenStatus,
  handleCheckBoxTodo,
}) => {
  return (
    <div hidden={hiddenStatus.todos} className="TodoItem">
      <div className="Todo">
        <h3>{todos.title}</h3>
        <input
          type="checkbox"
          checked={todos.completed}
          onChange={() => handleCheckBoxTodo(todos.id, todos.completed)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
