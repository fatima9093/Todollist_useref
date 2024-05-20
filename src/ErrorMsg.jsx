import { useContext } from "react"
import { todoItemContext } from "./Store/todo_item_store"

function ErrorMsg(){
    const {todoItem}=useContext(todoItemContext)
    console.log(todoItem)
    return(
        <>
        {todoItem.length===0 && <h3 className="heading">Enjoy your Day</h3>}
        </>
    )
}

export default ErrorMsg