import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { todoItemContext } from "./Store/todo_item_store";
function TodoItem({todoName,todoDate}) {
  const {deleteItem}=useContext(todoItemContext)
  // console.log(addNewItem)
  
    return (
      <div class="item-container">
        <div class="row kg-row">
          <div class="col-6 margin">{todoName}</div>
          <div class="col-4 margin" >{todoDate}</div>
          <div class="col-2 containers">
            <button type="button" class="btn btn-danger kg-btn" onClick={()=>deleteItem(todoName)}>
              Delete<span><MdDelete /></span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;