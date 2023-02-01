import React from 'react';
import {useState} from "react"
import Model from "./Model"

const Card=({cate})=>{
    const[show,setShow]=useState(false);
    const[Item,setItem]=useState();
    return(
        <>
        <div className='card-container'>
         {
            cate.map((item)=>{
             let thumbnail=item.thumbnail; 
             if(thumbnail!==undefined){
                return(
                    <>
                    <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                        <img src={thumbnail} alt=""/>
                        <h1>{item.title}</h1>
                        <h1>${item.price}</h1>
                    </div>
                    <Model show={show} item={Item} onClose={()=>setShow(false)}/>
                    </>
                )
             }
            })
         }
         </div>
        </>
    )
}

export default Card;