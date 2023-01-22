import React, {useState} from 'react'
import {Todo} from "./model"
import InputField from "./components/InputField/InputField"
import TodoList from "./components/TodoList/TodoList"

import './App.css'

function App(): JSX.Element {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  console.log(todo)

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo('')
    }
  }
  console.log(todos)

  return (
    <div className='app'>
      <span className='heading'>Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
      {/*{todos.map(item => (*/}
      {/*  <li>{item.todo}</li>*/}
      {/*))}*/}
    </div>
  )
}

export default App
