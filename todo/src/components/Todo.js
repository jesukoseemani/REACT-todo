

const Todo = ({todo, todos, setTodos}) => {

  const deleteHandler = (e) => {
  
 todos.setTodos(todos.todos.filter(item => item.id !== todo.id))

  }
  
  const completeHandler = () => {
    
    todos.setTodos(todos.todos.map(item => {

      if(item.id === todo.id ){
        return{
          ...item,
          completed: !item.completed,
          key: item.id
          }
           
      }
      return item;
    }))
    
  }

  return(
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}> {todo.text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo