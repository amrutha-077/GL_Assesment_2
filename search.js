import { result } from "lodash";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import './product.css'
const Search=(props)=>{
    const [book,setBook]=useState(props.data)
    const [search,setSearch]=useState('')
    const [result,setResult]=useState([])
    const navigate=useNavigate()

    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    const handleSearch=(e)=>{
        
        e.preventDefault()
        let data=book.filter((item)=>item.author===setSearch(e.target.value))
        setResult(data)
        console.log(result) 
    }
    return(
        <div >
            <div>
                <Link to='/search'><button className="btns">Search</button></Link>
                <Link to='/price'><button className="btns">Price</button></Link>
                <Link to='/rating'><button className="btns">Rating</button></Link>
                   
            </div>
            <form className="search">
                    <input type='text' placeholder="Search here..." onChange={(e)=>handleChange(e)}></input>
                    <button className="search-btn" onClick={(e)=>handleSearch(e)}>search</button><br></br>   
            </form>

            <div className="container">
                      <div className="row">
               {
                         result.map((item)=>(
                                <div className="card">
                                        <h2>{item.name}</h2>
                                        <p>Catagory:{item.catagory}</p>
                                        <p>Author:{item.author}</p>
                                        <p>Price:{item.price}</p>
                                        <p>Rating:{item.rating}</p>
                                       <button className="product-btn"  onClick={()=>navigate('/buy')}>Buy</button>
                                    
                              </div>
                         ))
        
                    
                }
                </div>
                </div>

        </div>
    )
}
export default Search