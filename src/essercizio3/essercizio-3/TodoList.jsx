import { useCallback, useContext, useMemo, useState } from "react"
// import { useFetech } from "./hooks/useFetch"
import useFilteredTodos from "../hooks/useFilteredTodos"
import { TodoContext } from "../provider/TodoProvider"
import { Link } from "react-router-dom"

const TodoList = () => {
// const inputRef = useRef()
    const API_URL = "https://jsonplaceholder.typicode.com/todos"
    const filter = useFilteredTodos(data,searchTerm)
    const [searchTerm, setSearchTerm] = useState()
    // const { data, loading, error } = useFetech(API_URL)
    const [data, setData] = useContext(TodoContext)
    if (loading) {

        <p>caricamento...</p>
    }
    if (error) {
        <p>{error}</p>
    }

   const  handleInputChange = useCallback((e) =>{
    setSearchTerm(e.target.value)
   },[])

   const filtred = useMemo(() => {
       return data.filter((item) =>item == search)
   
   },[data,searchTerm])
    useEffect(()=>{
        inputRef.current.focus()
    },[])
   
    return (
        <>
             {
                data && data.map((item) => {
                    return (
                        <>
                        <ul key={item.id}>
                            {
                                <>
                                <li> <Link to="/item/${item.id}"></Link> {item.userID}</li>
                                <li>{item.title} 
                                    <button onClick={()=>setData(item.id)}>{item.completa ? "annulla" :"completa"}</button>
                                </li>
                                </>
                            }
                        </ul>
                           
                        </>


                    )
                })
                
                
            } 

            <form >
                <label htmlFor="recerca">recerca</label>
                 <input type="text" id="recerca" name="recerca" value={searchTerm}  onChange={(e) =>setSearchTerm(e.target.value)} ref={inputRef}/> 

                {/* con useCallback */}
                <input type="text" id="recerca" name="recerca" value={searchTerm}  onChange={handleInputChange} ref={inputRef}/>
                 
            </form>

            {
                list && list.map((item) => (
                    <ul key={item.id}>
                        {
                        <li>{item.text}</li>
                        }
                    </ul>
                ))
            }
        </>
    )
}


export default TodoList