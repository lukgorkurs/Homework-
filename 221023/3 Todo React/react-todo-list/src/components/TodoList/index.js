import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';



function TodoList() {
  const [todoInputValue, setTodoInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [alertText, setAlertText] = useState('');



  const getMyDate = () => {
    const date = new Date();
    
    return String(date.getHours()).padStart(2, '0')+':'         
           +String(date.getMinutes()).padStart(2, '0')+' '
           +String(date.getDate()).padStart(2, '0')+'.'
           +String(date.getMonth()+1).padStart(2, '0')+'.'
           +date.getFullYear();
  }


  const handleTodoInputChange = event => {
    setTodoInputValue(event.target.value)
  }

  function handleComplete(id) {
    
    const removeItem = todos.filter((todo) => {
          return todo.id !== id;
    });

    setTodos(removeItem);
  }



  const handleSubmit = event => {   
    event.preventDefault();

    if (todoInputValue.length<5)
      {
        setAlertText('too short text of the task.');
        return;
      }

      const newTodo = {
          id: uuidv4(),          
          title: todoInputValue,       
          createdAt: getMyDate()
      }

      const newTodos = todos.concat(newTodo);
      setTodos(newTodos);

      
      setAlertText('');
      setTodoInputValue('')
    }
 
  

  return (
    <div className='todo'>
      <header>
        <form onSubmit={handleSubmit} className='addTask'>
            <label>
                New task:
            <input
                className='input'
                type="text"
                value={todoInputValue}
                onChange={handleTodoInputChange}
            />
            </label>
            <button type='submit' className='btnSubmit'>Add Task</button>
        </form>        
        <span className='alert'> {alertText} </span>

        <h3>Tasks list:</h3>

        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Created</th>
              <th>Completed</th>
            </tr>
          </thead>          
          <tbody>

            {todos.map(todo => {
              return <tr key={todo.id}>
                        <td>{todo.title}</td>
                        <td >{todo.createdAt ? todo.createdAt : null}</td>                                               
                        <td><button onClick={() => handleComplete(todo.id)}>complete</button></td>
                      </tr> 
            })}

          </tbody>
        </table>

      </header>
    </div>
  );
}

export default TodoList;
