import {useState} from 'react';
import NewTodoForm from './components/NewTodoForm.jsx';
import TodoList from './components/TodoList.jsx';

import './index.css';

export default function App() {

 const [todos, setTodos] = useState([
  { id:crypto.randomUUID(), title: 'item1', completed: false },
  { id:crypto.randomUUID(), title: 'item2', completed: false },
  { id:crypto.randomUUID(), title: 'item3', completed: true } 
]);

const addTodo = (title) =>{
  setTodos((currentTodos) => {
    return [
      ...currentTodos, 
      {id:crypto.randomUUID(), title, completed: false }
    ]
  })
}

const toggleTodo = (id, completed) =>{
  setTodos(currentTodos =>{
    return currentTodos.map(todo => {
      if(todo.id === id){
        return {...todo, completed}
      }
      return todo;
    });
  })
}

const deleteTodo = (id)  =>{
  setTodos(currentTodos =>{
    return currentTodos.filter(todo => todo.id !== id)
  })
}
  return (
 <>
   <NewTodoForm addToDo={addTodo}/>
   <h1 className='header'>Todo List</h1>
   <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
 </>
  )
}


