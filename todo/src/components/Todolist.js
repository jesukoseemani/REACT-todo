import {useEffect} from "react";
import Todo from "./Todo"

const Todolist = (todos, setTodos) => {

  useEffect(() => {
    getFromLocalStorage();

  },[])

  const getFromLocalStorage = () => {

    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let data = JSON.parse(localStorage.getItem("todos"))
      todos.setTodos(data);
    }
    
  }
  return(
  <div className="todo-container">
      <ul className="todo-list">
      
      {
        todos.filterTodos.map(todo => (
          <Todo todo={todo} todos={todos} setTodos={setTodos} />
        ))
      }
      
      </ul>
  </div>
  )
}

export default Todolist;


