import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function SingleUser(){
const[data,setData]=useState({})
const[loading,setLoading]=useState(false)
const [error,setError]=useState(false)
let params=useParams()
console.log(params)

useEffect(()=>{
    fetchsingle(params.ele_id)
},[params.ele_id])

async function fetchsingle(id){
setLoading(true)

    try {
        let res=await fetch(`https://reqres.in/api/users/${id}`)
        let data=await res.json()
        setData(data)
        setLoading(false)
        
    } catch (error) {
        setError(true)
        setLoading(false)
    }
}
return loading?(<h1>Loading....</h1>):error?(<h1>some thing went wrong</h1>):(


<div style={{border:"1px solid red",margin :"25px", height :"300px"}}>
    
        

            <img src={data?.data?.avatar}alt={data?.data?.first_name}/>
            <h5>Name:{data?.data?.first_name}{data?.data?.last_name}</h5>
            <p>email:{data?.data?.email}</p>
            <hr/>
            <p>{data?.support?.url}</p>


       
    
</div>



)


}

export default SingleUser