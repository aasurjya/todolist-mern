import React from 'react';
import Button from '@mui/material/Button';
import {TodoList} from "./TodoList"


function Body(){
    return <div>

    <Button variant="contained" className='todoList' >Today Todo-List</Button>
    <TodoList/>
    </div>
}
      
 export default Body;










