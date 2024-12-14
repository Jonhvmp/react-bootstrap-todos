import { FunctionComponent } from "react";

type Props = {
  todos: Todo[];
  onToggleTodo: (selectedTodo: Todo) => void;
  onRemoveTodo: (id: string) => void;
};

const TodoList: FunctionComponent<Props> = (props) => {
  if (props.todos.length === 0) {
    return (
      <div className="d-flex mt-5 flex-column align-items-center">
        <img src="%PUBLIC_URL%/undraw-floating.svg" className="w-25" alt="" />
        <h3 className="text-muted mt-3">No todos here yet...</h3>
        <p className="text-muted">Add a todo to get started!</p>
      </div>
    );
  }

  return (
    <ul className="list-group">
      {props.todos.map((todo) => (
        <li key={todo.id} className="list-group-item d-flex">
          <div className="form-check">
            <input
              id={`checkbox-${todo.id}`}
              type="checkbox"
              className="form-check-input"
              checked={todo.complete}
              onChange={() => props.onToggleTodo(todo)}
            />
            <label htmlFor={`checkbox-${todo.id}`} className="form-check-label">
              {todo.text}
            </label>
          </div>

          <button
            className="ms-auto btn btn-danger btn-sm"
            onClick={() => props.onRemoveTodo(todo.id)}
            title="Remove Todo"
          >
            <i className="bi bi-trash"></i>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
