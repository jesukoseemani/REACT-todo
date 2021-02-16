import { v4 as uuidv4 } from "uuid";

const Form = ({textInput, setTextInput, todos, setTodos, setStatus}) => {

const statusHandler = (e) => {
 setStatus(e.target.value)
}

const textInputHandler = (e) => {
 setTextInput(e.target.value)
}

const submitTextHandler = (e) => {
  e.preventDefault();
  if(textInput !== ""){
  setTodos([
    ...todos,
    {
      text: textInput,
      completed: false,
      id: uuidv4()
    }
  ]);

  setTextInput("")
  }else(
    setTodos([])
  )
  
}

return(
<form>
      <input value={textInput} onChange={textInputHandler} type="text" className="todo-input" />
      <button onClick={submitTextHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
)

}

export default Form
