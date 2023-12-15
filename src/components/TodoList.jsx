import PropTypes from 'prop-types';
import TodoItem from './TodoItem'

const TodoList = ({todos, toggleTodo, deleteTodo}) => {

  TodoList.propTypes={
    todos: PropTypes.array,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func
  }

  return (
    <ul className='list'>
    {todos.length === 0 && 'No todos'}
    {todos.map((todo) => {
      return (
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      )
    })}

   </ul>
  )
}

export default TodoList