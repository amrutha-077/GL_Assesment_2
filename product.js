import { result } from "lodash";
import React, { useState } from "react";
import { Link ,NavLink, useNavigate} from "react-router-dom";
import './product.css'
const Product=(props)=>{
    const [book,setBook]=useState(props.data)
    const [search,setSearch]=useState('')
    const [result,setResult]=useState([])

    const navigate=useNavigate()

    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        let result=book.filter((item)=>item.author===setSearch)
        setBook(result) 
    }
    return(
        <div >
            <div>
                <Link to='/search'><button className="btns">Search</button></Link>
                <Link to='/price'><button className="btns">Price</button></Link>
                <Link to='/rating'><button className="btns"  onClick={()=>navigate('/buy')}>Rating</button></Link>
                
               
            </div>

            <div className="container">
                      <div className="row">
               {
                         book.map((item)=>(
                                <div className="card hover-shadow cursor">
                                    <div class="card-body ">
                                        <h2>{item.name}</h2>
                                        <p>Catagory:{item.catagory}</p>
                                        <p>Author:{item.author}</p>
                                        <p>Price:{item.price}</p>
                                        <p>Rating:{item.rating}</p>
                                       <button className="product-btn"  onClick={()=>navigate('/buy')}>Buy</button>
                                    </div>
                              </div>
                         ))
        
                    
                }
                </div>
                </div>

        </div>
    )
}
export default Product