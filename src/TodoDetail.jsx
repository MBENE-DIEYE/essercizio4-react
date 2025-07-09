import { useContext } from "react"
import { Link, useParams } from "react-router-dom"

const TodoDetail = () =>{
    const {id} = useParams()
    const {todos} =useContext(TodoContext)
    const todo = todos.find(item => item.id == id)
    return(
        <>
        <h3>Detagli del to-do</h3>
        <span>{todo.id}</span>
        <p>{todo.testo}</p>
        <p>{todo.completed?'si':'no'}</p>
        <Link to="/">list</Link>
        </>
    )
}
export default TodoDetail