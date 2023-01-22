import { useState,useEffect } from "react"

import {Link, link, useSearchParams} from "react-router-dom"

function getpage(val=1){
    let PageNUmber=Number(val)
    if(typeof PageNUmber!=="number"){
        PageNUmber=1
    }if(PageNUmber<=0){
        PageNUmber=1
    }if(!PageNUmber){
        PageNUmber=1
    }
    return PageNUmber
}

function User(){
const[data,setData]=useState([])
const[loading,setLoading]=useState(false)
const[error,setError]=useState(false)
let [params,setParams]=useSearchParams()
const[page,setPage]=useState(getpage(params.get("page")))

useEffect(()=>{
    fetchApi(page)

},[page])

useEffect(()=>{
    setParams({page:page})
},[page])

async function fetchApi(page){
    setLoading(true)
   
    try {
        let res=await fetch(`https://fakestoreapi.com/products?_page=${page}&_limit=2`)
        let data=await res.json()
 setData(data)
        setLoading(false)
    } catch (error) {
        setError(true)
        setLoading(false)
    }
}

const handleClick=(val)=>{
  setPage(page+val)
}



    return loading?(<h1>LOading....</h1>):error?(<h1>Something went wrond</h1>):(
        <>
     
            <h1>Welcome to users page</h1>
            <button>Sorting by price High</button>
                <button>Sorting by price low</button>
                <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
            {
               
                data?.map((ele)=>(
                    <div key={ele.id} >
                        <img width={"100px"} src={ele.image} alt={ele.first_name}/>
                        <p>
                            Price:{ele.price}
                        </p>


<Link to={`/user/${ele.id}`} >Show more</Link>
                    </div>


                ))
            }
            </div>
            <div>
                <button disabled={page==1}onClick={()=>handleClick (-1) }>prev</button>
                <p>{page}</p>
                <button onClick={()=>handleClick (+1)}>Next</button>
            </div>


      
        </>
    )
}
export default User