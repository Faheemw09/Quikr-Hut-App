import React from 'react'
import Slider from 'react-slick';



const istdiv= [
    {
    imageurl:"https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/dining-tables.png",
    name:"Dining Tables"
},
   { imageurl:"https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/office-furnitures.png",
   name:"office furnitures"},
    {imageurl:"https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/washing-machine.png",
    name:"washing machine"},
    {imageurl:"https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/led-tv.png",
    name:"led tv"},
 {   imageurl:"https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/laptops.png",
 name:"laptops"},
  

]
const divtwo=[
    {  imageurl:"https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/electronics/speakers.png"},
    {  imageurl:"https://teja8.kuikr.com/escrow/assets/image/assured_landing_page/sofa_sets_desktop.png"},
      {imageurl:"https://teja8.kuikr.com/escrow/assets/image/assured_landing_page/Wardrobes_desktop.png"},
      {imageurl:"https://teja8.kuikr.com/escrow/assets/image/assured_landing_page/Gaming_Consoles_desktop.png"},
]
const Landingpage = () => {
  return(
<div  style={{fontfamily: 'Open Sans'}}
    

>
<h2 style={{textAlign:"left" ,paddingLeft:"210px",fontSize:"14px",fontFamily:"bold",paddingTop:"9px"}}>Most Popular Products</h2>


    <div style={{display:"flex", justifyContent:'space-around',alignItems:"center", borderRadius:"5px" ,height:"130px",marginTop:"10px",width:"860px",border:"1px solid lightgrey",margin:"auto",backgroundColor:"white"}}>
  
        {
            istdiv?.map((ele)=>{
return <div> 
<div key={ele.id} style={{height:"90px",width:"90px" ,borderRadius:"50%", border:"1px solid grey"}  }>
<img width="80px" borderradius="50%" src={ele.imageurl} />
<h5 style={{fontSize:"10px",paddingTop:"16px",color:"black"}}>{ele.name}</h5>
</div>
</div>
            })
        }
        





    </div>
    </div>
   
  )
}

export default Landingpage