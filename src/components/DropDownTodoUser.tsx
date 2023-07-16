import { ITodo } from "../types/types";

interface DropDownTodoUserProps {
  todos: ITodo;
  hiddenStatus: any;
  handleCheckBoxTodo: (id: number) => void;
}

const DropDownTodoUser: React.FC<DropDownTodoUserProps> = ({
  todos,
  handleCheckBoxTodo,
  hiddenStatus,
}) => {
  return (
    <div hidden={hiddenStatus?.todos} className="TodoItem">
      <div className="Todo">
        <h3>{todos.title}</h3>
        <input
          type="checkbox"
          checked={todos.completed}
          onChange={() => handleCheckBoxTodo(todos.id)}
        />
      </div>
    </div>
  );
};

export default DropDownTodoUser;
