import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const initialtodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  const [todoItems,setTodoitems]= useState(initialtodoItems);




  //-----------------------------------
  const onNewItem=(itemName,itemDueDate)=>{
    console.log( `New item added: ${itemName} Date: ${itemDueDat}`);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;