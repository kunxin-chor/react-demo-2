import React from 'react'

export default function TodoList(props)
{
    let startIndex = props.currentPage * props.numberPerPage;
    let endIndex = startIndex + props.numberPerPage;
    
    return (
        <div>
        <h3>Page {props.currentPage}</h3>
        <ul>
            {
             props.todos.slice(startIndex, endIndex).map((todo) =>{
                 return <li>{todo.title}</li>
             } )
            }
        </ul>
        { props.currentPage > 0 ?
          <button onClick={props.prevPage}>Prev</button> : null
        }
         <button onClick={props.nextPage}>Next</button>
         
         </div>
    )
}