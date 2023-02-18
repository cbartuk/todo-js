import "./Todo.scss";
import {useState} from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [displayAlert, setDisplayAlert] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!e.target.elements[0].value) {
      setDisplayAlert(true);
      setTimeout(() => {
        setDisplayAlert(false);
      }, 1000);
      return;
    }

    const isExist = todos.find((todo) => todo.text === e.target.elements[0].value);

    if (isExist) return;
    const newTodo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      text: e.target.elements[0].value,
      isCompleted: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  function toggleComplete(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    setTodos(newTodos);
  }
  function deleteAll() {
    setTodos([]);
  }
  function deleteCompleted() {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(newTodos);
  }

  function updateTodo(id, text) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(newTodos);
  }
  function toggleEdit(id) {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });
    setTodos(newTodo);
  }
  return (
    <div className="container">
      <h2>Yapılacaklar Listesi</h2>
      <div className="d-flex my-3">
        <form onSubmit={handleSubmit} className="flex-fill">
          <div className="input-group">
            <input type="text" className="form-control" />
            <button type="submit" className="btn btn-primary">
              Ekle
            </button>
          </div>
        </form>
        {todos.length && (
          <button onClick={deleteAll} className="btn btn-danger mx-2">
            Delete All Todos{" "}
          </button>
        )}
        <button onClick={deleteCompleted} className="btn btn-secondary">
          Tamamlananları sil
        </button>
      </div>
      {displayAlert && <div className="alert alert-warning"> Lütfen Görev Giriniz </div>}

      <ul className="list-group">
        {todos &&
          todos.map((todo, index) => {
            return (
              <li key={index} className="list-group-item user-select-none">
                <input
                  type="checkbox"
                  className="d-none"
                  id={"todo" + todo.id}
                  onChange={() => toggleComplete(todo.id)}
                />
                <div className="d-flex ">
                  <label htmlFor={"todo" + todo.id} className="flex-fill p-2 " role="button">
                    <div className={todo.isCompleted ? "text-decoration-line-through" : "fw-semibold"}>
                      {todo.text}
                    </div>
                  </label>
                  {todo.isCompleted && <div className="text-bg-success p-2 rounded-2"> Bu Görev Tamamlandı </div>}
                  <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger mx-2">
                    Delete
                  </button>
                  <button onClick={() => toggleEdit(todo.id)} className="btn btn-warning">
                    {todo.isEditing ? "Save" : "Edit"}
                  </button>
                </div>
                {todo.isEditing && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      toggleEdit(todo.id);
                    }}>
                    <div className="input-group mt-3">
                      <span className="input-group-text"> New Title </span>
                      <input
                        type="text"
                        onChange={(e) => updateTodo(todo.id, e.target.value)}
                        className="form-control "
                      />
                    </div>
                  </form>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
