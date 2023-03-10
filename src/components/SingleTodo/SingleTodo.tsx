import React, {useEffect, useRef, useState} from "react"
import {Todo} from "../../model"
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"

import './styles.css'

interface Prop {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function SingleTodo(props: Prop): JSX.Element {
  const {todo, todos, setTodos} = props

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(todos.map(todo => (
      todo.id === id ? {...todo, todo: editTodo} : todo
    )))
    setEdit(false)
  }

  const handleDone = (id: number) => {
    setTodos(todos.map(todo => (
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo
    )))
  }

  return (
    <form className='todos_single' onSubmit={(e) => handleEdit(e, todo.id)}>
      {
        edit ? (
          <input
            className='todos_single-text'
            value={editTodo}
            ref={inputRef}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : todo.isDone ? (
          <s className='todos_single-text'>{todo.todo}</s>
        ) : (
          <span className='todos_single-text'>{todo.todo}</span>
        )
      }

      <div>
        <span
          className='icon'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            }
          }}
        >
          <AiFillEdit/>
        </span>
        <span className='icon' onClick={() => handleDelete(todo.id)}><AiFillDelete/></span>
        <span className='icon' onClick={() => handleDone(todo.id)}><MdDone/></span>
      </div>
    </form>
  )
}

export default SingleTodo
