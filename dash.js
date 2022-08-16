import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './home.css';
const Dash=()=>{
    const [admin,setAdmin]=useState('Admin')
    return(
        <div >
         
            <h4>Welcome to Dashboard! {admin}</h4>
            <div className="conatiner">
                <div className="row">
                    <div className="card">
                        <h3>Admin</h3>
                        <p>Email:admin@gmail.com</p>
                        <p>Phone No.:67485903030</p>
                        <p>Delivery Address:#435 Mysore-570022</p>
                        <Link to='/product'><button className="dash-btn">Proceed</button></Link>  
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dash