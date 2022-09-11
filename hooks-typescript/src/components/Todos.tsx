import React, { useReducer, useState } from 'react'

import { v4 as uuid } from 'uuid'

type Todo = {
  id: number
  todo: string
}

type State = {
  todos: Todo[]
  todoCount: number
}

type ActionType = {
  type: 'ADD_TODO' | 'REMOVE_TODO'
  todo?: Todo
}

function reducer(state: State, action: ActionType) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.todo],
        todoCount: state.todoCount + 1,
      }
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.todo.id),
        todoCount: state.todoCount - 1,
      }
    default:
      return state
  }
}

export const Todos: React.FC = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  })
  const [todo, setTodo] = useState('')

  const newTodo: Todo = {
    id: uuid(),
    todo,
  }

  return (
    <div
      style={{
        border: '2px dashed #3ab0ff',
        padding: '10px',
        marginTop: '15px',
      }}
    >
      <br />
      <h1 style={{ color: '#3ab0ff' }}>useReducer - useState</h1>
      <h1>Todos: {todoCount}</h1>
      <input
        type="text"
        onInput={e => setTodo((e.target as HTMLInputElement).value)}
      />
      <button
        onClick={() =>
          todo ? dispatch({ type: 'ADD_TODO', todo: newTodo }) : null
        }
      >
        add
      </button>
      {todos?.map(todo => {
        return (
          <div key={todo.id}>
            <h2>{todo.todo}</h2>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', todo })}>
              remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
