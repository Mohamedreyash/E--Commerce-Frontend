import React, { useState } from "react"
import axios from "axios"
import Card from "./Card";
import Header from "./Header";

const Search=()=>{
    const[search,setSearch]=useState("");
    const[category,setData]=useState([]);
    const searchCategory=(e)=>{
        if(e.key==="Enter"){
        axios.get('https://dummyjson.com/products/category/'+search).then(res=>setData(res.data.products)).catch(err=>console.log(err))
        }
    }
    if(search===""){
        return(
            <>
             <div className="search-container">
            <div>
                <h1>Available Products</h1>
                <p>"smartphones","laptops","fragrances","skincare","groceries","home-decoration","furniture","tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","sunglasses","automotive","motorcycle","lighting"</p>
            </div>
            <div className="search">
                <input type="text" id="search" placeholder="search-items" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchCategory}/>
            </div>
          </div>
            <Header/>
            </>
        )
    }else{
    return(
        <>
          <div className="search-container">
            <div>
                <h1>Available Products</h1>
                <p>"smartphones","laptops","fragrances","skincare","groceries","home-decoration","furniture","tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","sunglasses","automotive","motorcycle","lighting"</p>
            </div>
            <div className="search">
                <input type="text" id="search" placeholder="search-items" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchCategory}/>
            </div>
          </div>
          <Card cate={category}/>
        </>
    )
   
}
}

export default Search;