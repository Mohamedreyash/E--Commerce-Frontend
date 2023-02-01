import React, { useEffect, useState } from "react"
import './header.css'
const Header=()=>{
    const[product,setProduct]=useState([]);
    useEffect(()=>{
      fetch("https://dummyjson.com/products").then(res=>res.json()).then(data=>{setProduct(data.products)})
    },[])
    const [pageNo, setPageNo] = useState(1);
    let limit = 4;
    let pages = Math.ceil(product.length / limit);
    let pagesArray = new Array(pages).fill(0);
    const start = (pageNo - 1) * limit;
    const end = pageNo * limit;
    const productpage = product.slice(start, end);
    const left = "<"
    const right = ">"
    const handlepageClick = (e) => {
        console.log((e.target.value));
        setPageNo(parseInt(e.target.value))
    }
    return(
        <>
        <div className="cnt">
         {productpage.map(pro=>(
           <ProductCard 
           images={pro.thumbnail}
           title={pro.title}
           category={pro.category}
           price={pro.price}
           />
         ))}
         </div>
         <div className='page-no'>
                {(pageNo > pages) ? null : <button onClick={() => {
                    if (pageNo > 1) {
                        setPageNo(pageNo - 1)
                    }
                }
                }> {left} </button>}

                {
                    pagesArray.map((item, i) => {
                        return (<button value={i + 1} onClick={handlepageClick}>{i + 1}</button>)
                    })
                }
                {(pageNo > pages) ? null : <button onClick={() => {
                    if (pageNo !== pages) {
                        setPageNo(pageNo + 1)
                    }
                }
                }> {right} </button>}
            </div>

        </>
    )
}
const ProductCard=(props)=>{
    return(
        <div className="container">
            <img src={props.images} alt=""></img>
            <div className="name">
                <p>Product Name:{props.title}</p>
                <p>Category:{props.category}</p>
                <p>${props.price}</p>
            </div>
        </div>
    )
}
export default Header