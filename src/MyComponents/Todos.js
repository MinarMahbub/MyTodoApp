import React from 'react'
import  {TodoItem}  from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container " style ={myStyle}>
            <h3  >Todos list</h3>
             {props.todos.length ===0? <h2> No Todos to dispaly </h2>:
             props.todos.map((todo)=>{
                 
                 return ( 
                 <TodoItem todo ={todo} key={todo.sno} onDelete={props.onDelete}/>
                 
                 )
                
             })
             } 
             
        </div>
    )
}
