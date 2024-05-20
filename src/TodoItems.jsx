import { useContext } from "react";
import TodoItem from "./TodoItem";
import { todoItemContext } from "./Store/todo_item_store";

function TodoItems({onDeleteClick}) {
  const {todoItem,deleteItem}=useContext(todoItemContext)
  console.log()
  
    return (
      <div class="container">
        {todoItem.map((item)=>(
            <TodoItem todoName={item.name} todoDate={item.date}  deleteItem={deleteItem}/>
        ))}

      </div>
    );
  }
  
  export default TodoItems;



//   <div class="row kg-row">
//   <div class="col-6">{todoName}</div>
//   <div class="col-4">{todoDate}</div>
//   <div class="col-2">
//     <button type="button" class="btn btn-danger kg-btn">
//       Delete
//     </button>
//   </div>
// </div>