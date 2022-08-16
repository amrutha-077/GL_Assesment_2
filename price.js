import React, { useEffect } from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Price=(props)=>{
    const [price,setPrice]=useState(props.data)
    const [result,setResult]=useState([])

    const navigate=useNavigate()

    useEffect(()=>{
        const sorteddata=[...price].sort((a,b)=>Number(a.price)-Number(b.price))
        setResult(sorteddata)
    },[])
    return(
        <div>

              <div>
                <Link to='/search'><button className="btns">Search</button></Link>
                <Link to='/price'><button className="btns">Price</button></Link>
                <Link to='/rating'><button className="btns">Rating</button></Link>
                
               
            </div>
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

export default Price