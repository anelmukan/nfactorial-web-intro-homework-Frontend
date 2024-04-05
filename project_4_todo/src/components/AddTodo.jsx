import PropTypes from 'prop-types'
const AddTodo = ({ todoNew, setTodoNew, addTodo }) => {
  return (
    <div className="actions_container">
      <span>Add New To Do</span>
      <textarea
        value={todoNew}
        onChange={(event) => {
          setTodoNew(event.target.value)
        }}
        type="text"
        className="todo_input"
        placeholder="Your text"
      ></textarea>
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

AddTodo.propTypes = {
  todoNew: PropTypes.string.isRequired,
  setTodoNew: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo
