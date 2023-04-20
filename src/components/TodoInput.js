import React, { useState, useEffect } from 'react'

const TodoInput = ({createTodoItem, editTodoItem, item}) => {
const [value, setValue] = useState("")

const handleSubmit = e => {
     e.preventDefault();
     if(!value) return;
//     if(value === "") {
//         return console.log("Please add something to-do")
//     }
    if(item?.todo){
        const updatedTodo = { ...item, todo: value };
        console.log('updatedTodo', updatedTodo)
        editTodoItem(updatedTodo);       
    } else {
        console.log('createeeee')
        createTodoItem(value)
    }

    // createTodoItem(value)
    setValue("")
}

useEffect(() => {
   setValue(item.todo)
  }, [item]);

    return (
        <form>
        <input
        type="text"
        placeholder="Create todo"
        className="task-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <button className="button-add" onClick={handleSubmit}>{item?.todo ? "UPDATE" : "ADD" }</button>
        </form>
        )
}
export default TodoInput