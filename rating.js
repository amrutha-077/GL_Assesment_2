import React, { useEffect } from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Rating=(props)=>{
    const [rating,setRating]=useState(props.data)
    const [result,setResult]=useState([])

    const navigate=useNavigate()

    useEffect(()=>{
        const sorteddata=[...rating].sort((a,b)=>Number(a.rating)-Number(b.rating))
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

export default Rating