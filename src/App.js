import React, { useState } from 'react';
import "./App.css";
import TodoInput from "./components/TodoInput"
import TodoItem from "./components/TodoItem"
import Header from "./components/Header";

function App() {
  const [item, setItem]= useState({})
  const [todoItems, setTodoItems] = useState(
    [
    {todo: 'Title:', complete: false, id: 1},
    {todo: 'Description:', complete: false, id: 2},
    {todo: 'Due_date:', complete: false, id: 3},
    {todo: 'Status:', complete: false, id: 4}
    ]
    
    
    )

    // Complete Item
    const completeTodoItem = (index) => {
      const newTodoItems = [...todoItems];
      newTodoItems[index].complete = !newTodoItems[index].complete;
      setTodoItems(newTodoItems)
      };

    // Update Item
    const updateTodoItem = (index) => {
      const newTodoItems = [...todoItems];
      const item = newTodoItems[index];
      setItem(item);
      // const newItem = prompt(`Update ${item.todo}?`, item.todo);



      // let todoObj = { todo: newItem, complete: false };
      // newTodoItems.splice(index, 1, todoObj);
      // if (newItem === null || newItem === "") {
      // return;
      // } else {
      // item.todo = newItem;
      // }
      // setTodoItems(newTodoItems);
      };

    // Delete Item
    const deleteTodoItem = (index) => {
      const newTodoItems = [...todoItems]
      newTodoItems.splice(index, 1)
      setTodoItems(newTodoItems)
    }
    
      // Create Item
    const createTodoItem = (todo) => {
      const newTodoItems = [...todoItems, { todo, complete: false }];
      setTodoItems(newTodoItems);
    };

    const editTodoItem = (todo) => {
      const foundIndex = todoItems?.findIndex(todoItem => todoItem?.id === todo?.id);
      todoItems[foundIndex] = todo;
      setTodoItems([...todoItems]);


      setItem({});
    };


    return <div className="container">
      <div className='app-wrapper'>
        <div> <Header /> </div>
        <TodoInput createTodoItem={createTodoItem} editTodoItem={editTodoItem} item={item} />
          {todoItems?.map((item, index) => (
        <TodoItem key={index} index={index} item={item} 
        deleteTodoItem = {deleteTodoItem} 
        completeTodoItem = {completeTodoItem} 
        updateTodoItem = {updateTodoItem} />    
        ))}
      </div>
    </div>;
}
export default App;