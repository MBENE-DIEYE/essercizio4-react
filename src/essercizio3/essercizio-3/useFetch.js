import { useEffect, useState } from "react"

export const useFetech =(url) =>{

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData =async() =>{
       if(!loading) setLoading(true)
       if(error) setError(false)
        
       try {
         const response = await fetch(url)
         if(!response.ok){
            throw new Error("error during fetch data")
         }

         const data = await response.json()
         setData(data)
       } catch (error) {
        console.log(error)
       }

    } 
    useEffect(()=>{
        fetchData()
    },[url])

    return(
         {
            data,
            loading,
            error
        }
        
    )
        
       
        
    
}