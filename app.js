import React from "react";
import { Routes,Route} from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Login from './login';
import Signup from './signup';
import Dash from './dash';
import Book_data from "./book_data";
import Product from './product';
import Search from './search';
import Price from "./price";
import Rating from "./rating";
import Buy from "./buy";

const App=()=>{
    return(
        <>
        <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="dash" element={<Dash></Dash>}></Route>
        <Route path="product" element={<Product data={Book_data}></Product>}></Route>
        <Route path="search" element={<Search data={Book_data}></Search>}></Route>
        <Route path="price" element={<Price data={Book_data}></Price>}></Route>
        <Route path="rating" element={<Rating data={Book_data}></Rating>}></Route>
        <Route path="buy"  element={<Buy></Buy>}></Route>
        
    </Routes>
    </>
    )
    
}

export default App