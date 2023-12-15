import  {useState} from 'react';
import PropTypes from 'prop-types';


const NewTodoForm = ({addToDo}) => {

  NewTodoForm.propTypes={
    addToDo: PropTypes.func,
  }

  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(newItem === '') return;
    addToDo(newItem);
    setNewItem('');
  }

  return (
    <form onSubmit={handleSubmit}className='new-item-form'>
    <div className='form-row'> 
      <label> New item </label>
      <input type="text" id='item' value={newItem} onChange={e=> setNewItem(e.target.value)}/>
    </div>
    <button className='btn' >Add</button>
   </form>
  )
}

export default NewTodoForm