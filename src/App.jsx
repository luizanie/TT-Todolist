import {useState} from 'react';
import './index.css';

export default function App() {
 const [newItem, setNewItem] = useState('');
 const [todos, setTodos] = useState([
  { id:crypto.randomUUID(), title: 'item1', completed: false },
  { id:crypto.randomUUID(), title: 'item2', completed: false },
  { id:crypto.randomUUID(), title: 'item3', completed: true } 
]);

const handleSubmit = (e) =>{
  e.preventDefault();


  setTodos((currentTodos) => {
    return [
      ...currentTodos, 
      {id:crypto.randomUUID(), title: newItem, completed: false }
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
   <form onSubmit={handleSubmit}className='new-item-form'>
    <div className='form-row'> 
      <label> New item</label>
      <input type="text" id='item' value={newItem} onChange={e=> setNewItem(e.target.value)}/>
    </div>
    <button className='btn' >Add</button>
   </form>
   
   <h1 className='header'>Todo List</h1>
   <ul className='list'>
    {todos.length === 0 && 'No todos'}
    {todos.map((todo) => {
      return (
        <li key={todo.id}>
        <label>
          <input type="checkbox" 
          checked={todo.completed} 
          onChange={e => toggleTodo(todo.id, e.target.checked)} />
          {todo.title}
        </label>
        <button className='btn btn-danger' onClick={()=> deleteTodo(todo.id)}> Delete</button>
      </li>
      )
    })}

   </ul>
 </>
  )
}


