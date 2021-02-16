import './App.css';
import Form from "./components/Form";
import { useState, useEffect } from "react";
import Todolist from "./components/Todolist";

function App() {
  const[textInput, setTextInput] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  const[filterTodos, setFilterTodos] = useState([]);
  
  


  useEffect(() => {
    
    switchStatusHandler();
    
    saveToLocalStorage();
  
  },[status,todos])

  const saveToLocalStorage = () => {

    localStorage.setItem("todos", JSON.stringify(todos));

  }

  

  const switchStatusHandler = () => {
    switch(status){
      case "uncompleted":
      setFilterTodos(todos.filter(todo => todo.completed === false))
      break;
      case "completed":
      setFilterTodos(todos.filter(todo => todo.completed === true))
      break;
      default:
      setFilterTodos(todos)
      break;

    }
  }
  return (
    <div className="App">
     <header>
      <h1>Kosh's Todo List</h1>
    </header>
    <Form setStatus={setStatus} todos={todos} setTodos={setTodos} textInput={textInput} setTextInput={setTextInput} />
    <Todolist filterTodos={filterTodos} setFilterTodos={setFilterTodos} todos={todos} setTodos={setTodos} textInput={textInput}/>
    </div>
  );
}

export default App;
