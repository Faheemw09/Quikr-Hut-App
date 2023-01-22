import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Center,
 
} from '@chakra-ui/react';
import { useEffect, useState } from "react"
import axios from 'axios';


export default function ProductDisplay(){
const [post, setPost] = useState([]);

const getData=()=>{
    axios.get('http://localhost:8080/Add').then((res)=>setPost(res.data));
}

useEffect(()=>{
    getData();
},[]);


    return (
        <>
        <h2>Latest  Products</h2>
        <br/>
        <br/>
        <div className="postAdd" 
        style={{width:"1090px" ,margin:"auto",display:"grid",gridTemplateColumns:"repeat(4,1fr"}}>
        {post.slice(0,5).map((el)=>(
        <Center>
            <div className='cardDiv'
            style={{height:"250px",width:"200px" ,boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"20px"}}
            >
                <Center  pt={"5px"}>
            <img className='productImage' borderRadius="20px" width={"70%"} src={el.image}/></Center>
                <h3 style={{color:"blue"}}>{el.title}</h3>
                <hr />
                    
                <div  style={{display:"flex",justifyContent:"space-evenly"}}>
               
                <p>Price :Rs{el.price}</p>
                <p style={{color:"blue"}}>{el.category}</p>
                </div>
                <hr />
                <Button height={"20px"}>Shop Now</Button>
                </div> 
              </Center>
               
           
        ))}
        </div>
        </>
    )
}