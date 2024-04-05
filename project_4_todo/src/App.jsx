import { useState, useEffect } from 'react'
import './App.css'
import Title from './components/Title'
import Footer from './components/Footer'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {
  const [todoNew, setTodoNew] = useState('')

  const [filteredStatus, setFilteredStatus] = useState('all')
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem('todo')) ?? [
      {
        id: Date.now(),
        title: 'My 1st todo',
        status: 'active',
      },
    ],
  )

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  function addTodo() {
    const newTodoItem = {
      id: Date.now(),
      title: todoNew,
      status: 'active',
    }

    setTodo([...todo, newTodoItem]) //spread operator
    setTodoNew('')
  }

  function removeTodo(idx) {
    const newTodos = todo.map((todo_item) =>
      todo_item.id === idx ? { ...todo_item, status: 'removed' } : todo_item,
    )
    setTodo(newTodos)
  }

  const getDoneOrActiveStatus = (status) => {
    if (status === 'active') return 'done'
    else if (status === 'done') return 'active'
  }

  function makeTodoDone(idx) {
    const newTodos = todo.map((todo_item) =>
      todo_item.id === idx
        ? { ...todo_item, status: getDoneOrActiveStatus(todo_item.status) }
        : todo_item,
    )
    setTodo(newTodos)
  }

  function changeStatus(newStatus) {
    setFilteredStatus(newStatus)
  }

  const filteredTodos = todo.filter((task) => {
    if (filteredStatus == 'all') return task
    if (filteredStatus == 'done' && task.status == 'done') return task
    if (filteredStatus == 'active' && task.status == 'active') return task
    if (filteredStatus == 'removed' && task.status == 'removed') return task
  })

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '64px',
        textAlign: 'left',
      }}
    >
      <Title />
      <main>
        <div className="filter_buttons">
          <button onClick={() => changeStatus('active')}>To Do</button>
          <button onClick={() => changeStatus('done')}>Done</button>
          <button onClick={() => changeStatus('removed')}>Trash</button>
          <button onClick={() => changeStatus('all')}> All</button>
        </div>
        <AddTodo todoNew={todoNew} setTodoNew={setTodoNew} addTodo={addTodo} />
        <TodoList
          filteredTodos={filteredTodos}
          filteredStatus={filteredStatus}
          removeTodo={removeTodo}
          makeTodoDone={makeTodoDone}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
