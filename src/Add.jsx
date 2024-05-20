import { useContext, useRef } from "react"

import { FaPlus } from "react-icons/fa";
import { todoItemContext } from "./Store/todo_item_store";

function Add({}){
    const {addNewItem}=useContext(todoItemContext)
    const todoNameElement=useRef()
    const todoDateElement=useRef()  
    const handleAddBtnClick=(event)=>{
        event.preventDefault()
        const todoName=todoNameElement.current.value
        const todoDate=todoDateElement.current.value

        todoNameElement.current.value=""
        todoDateElement.current.value=""
        
        addNewItem(todoName,todoDate)
    }
    return(
        <>
        <div class="container text-center">
            <form class="row kg-row" onSubmit={handleAddBtnClick}>
                <div class="col-6">
                    <input placeholder="Enter Todo Here" id="input" ref={todoNameElement} />
                </div>
                <div class="col-4">
                    <input type="Date" id="Date" ref={todoDateElement} />
                </div>
                <div class="col-2 containers">
                <button type="submit" class="btn btn-success kg-btn">Add<span className="reacticon"><FaPlus/></span></button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Add