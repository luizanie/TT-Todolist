import './index.css';

export default function App() {
  return (
 <>
   <form className='new-item-form'>
    <div className='form-row'> 
      <label> New item</label>
      <input type="text" id='item' />
    </div>
    <button className='btn'>Add</button>
   </form>
   <h1 className='header'>Todo List</h1>
 </>
  )
}


