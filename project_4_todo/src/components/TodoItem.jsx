import { Checkbox } from '@blueprintjs/core'
import PropTypes from 'prop-types'

const TodoItem = ({ todo_item, removeTodo, makeTodoDone }) => {
  return (
    <div className="todo_item_container">
      <Checkbox
        checked={todo_item.status == 'done'}
        label={
          <span
            style={{
              textDecoration:
                todo_item.status == 'done' ? 'line-through' : undefined,
            }}
          >
            {todo_item.title}
          </span>
        }
        onChange={() => makeTodoDone(todo_item.id)}
      />
      {todo_item.status != 'removed' && (
        <button
          className="button-small"
          onClick={() => removeTodo(todo_item.id)}
        >
          Remove
        </button>
      )}
    </div>
  )
}

TodoItem.propTypes = {
  todo_item: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
  makeTodoDone: PropTypes.func.isRequired,
}

export default TodoItem
