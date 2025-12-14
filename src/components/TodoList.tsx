import React from 'react'
import './styles.css'
import type { Todo } from '../model';
import SingleTodo from './SIngleTodo';

interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
} 

const TodoList: React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todos'>
        {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
    </div>
  )
}

export default TodoList