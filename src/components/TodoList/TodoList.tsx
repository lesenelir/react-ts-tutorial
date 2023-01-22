import React from "react"
import {Todo} from "../../model"
import SingleTodo from "../SingleTodo/SingleTodo"

import './styles.css'

interface Props {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoList(props: Props): JSX.Element {
  const {todos, setTodos} = props

  return (
    <div className='todos'>
      {todos.map(todo => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  )
}

export default TodoList
