import React, { useState } from "react";


var done = {textDecoration: "line-through"}


export  const TodoList= ()=>{
    const strike = ()=>{
        setdone(!isDone)
        
    }
    
    const [isDone, setdone] = useState(true);
    return <div>

    <p style={isDone ? done: null}> Buy Milk</p>
    <button onClick={strike}>Mark</button>
    

    </div>
}

