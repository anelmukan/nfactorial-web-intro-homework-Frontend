import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({
  filteredTodos,
  filteredStatus,
  removeTodo,
  makeTodoDone,
}) => {
  const getStatus = (status) => {
    if (status === 'active') return 'To Do'
    else if (status === 'done') return 'Done'
    else if (status === 'removed') return 'Trash'
    else if (status === 'all') return 'All'
  }

  return (
    <div className="todo_container">
      <h2>{getStatus(filteredStatus)}</h2>
      <div style={{ borderBottom: '1px solid', marginBottom: '16px' }} />
      {filteredTodos.map((todo_item, idx) => (
        <TodoItem
          key={idx}
          todo_item={todo_item}
          removeTodo={removeTodo}
          makeTodoDone={makeTodoDone}
        />
      ))}
    </div>
  )
}

TodoList.propTypes = {
  filteredTodos: PropTypes.array.isRequired,
  filteredStatus: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
  makeTodoDone: PropTypes.func.isRequired,
}

export default TodoList
