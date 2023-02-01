import React from "react";
const Model=({show,item,onClose})=>{
    if(!show){
        return null;
    }
    let thumbnail=item.thumbnail; 
    return(
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" onClick={onClose}>close</button>
                <div className="inner-box">
                    <div className="info">
                        <img src={thumbnail} alt=""></img>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Model;