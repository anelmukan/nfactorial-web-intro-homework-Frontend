const Title = () => {
  return (
    <div
      className="title"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
      }}
    >
      <header className="todo_welcome">Simple Todo List</header>
      <p>Today is awesome day. The weather is awesome, you are awesome too!</p>
    </div>
  )
}

export default Title
