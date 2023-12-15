import PropTypes from 'prop-types';


const TodoItem = ({completed, id, title, toggleTodo, deleteTodo}) => {

  TodoItem.propTypes={
    completed: PropTypes.string,
    id: PropTypes.string, 
    title: PropTypes.string,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func
  }

  return (
    <li key={id}>
    <label>
      <input type="checkbox" 
      checked={completed} 
      onChange={e => toggleTodo(id, e.target.checked)} 
      />
      {title}
    </label>
    <button className='btn btn-danger' 
    onClick={()=> deleteTodo(id)}
    > Delete</button>
  </li>
  )
}

export default TodoItem