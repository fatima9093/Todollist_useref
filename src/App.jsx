
import TodoItems from './TodoItems'
import './App.css'
import Add from './Add'
import { useState } from 'react'
import ErrorMsg from './ErrorMsg'
import { todoItemContext } from './Store/todo_item_store'

function App() {
  // const initialTodoItem=[
  //   {
  //     name:"buy milk",
  //     date:"22-10-2000"
  //   },
  //   {
  //     name:"hello world",
  //     date:"22-10-2000"
  //   },
  //   {
  //     name:"what is",
  //     date:"22-10-2000"
  //   }
  // ]
  const [todoItem,settodoItem]=useState([])
  const addNewItem=(name,date)=>{
    // let newTodoItem=[...todoItem,{name:name,date:date}]
    settodoItem((currentVal)=>
      [...currentVal,{name:name,date:date}]
    )
  }
  const deleteItem=(todoItemName)=>{
    // console.log("item deleted ",{todoItemName})
    const newTodoItems=todoItem.filter((item)=>item.name!==todoItemName)
    // console.log(newTodoItems)
    settodoItem(newTodoItems)
  }
  // const arr=[{
  //       name:"what is",
  //       date:"22-10-2000"
  //     }]
  return (
    <todoItemContext.Provider value={{todoItem:todoItem,addNewItem:addNewItem,deleteItem:deleteItem}}>
    <>
    <p class="text-center fs-1 fw-bold ">Todo List</p>
    <Add />
    <ErrorMsg />
    <div className="items-container">
        <TodoItems />
      </div>
     
    </>
    </todoItemContext.Provider>
  )
}

export default App
