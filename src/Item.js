import React from "react"

const Item = ({ todo }) => {
    console.log(todo);
    
    return (
        <>
            <li>{todo.note}</li>
        </>
    )
}

export default Item