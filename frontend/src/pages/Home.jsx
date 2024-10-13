import React from 'react'
import "./Home.css" ;
import { Link } from 'react-router-dom';

const Home = () => {

  const image=require("../images/GirlStudyImage.jpg")
  return (
    <div className="Home-Page bg-dark text-white container-fluid">
      <div className="row container">
          <div 
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{height:"91.5vh"}}>
          <h2 style={{fontSize:"70px"}}>BOOK STORE </h2>
          <h3 style={{fontSize:"50px"}}>FOR YOU</h3>
          <p style={{color:"silver"}}> Check out the Books From Here </p>
          
          <button><Link to="mybooks" className="viewBook my-3"> View Books</Link></button>
          </div>

          <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
          style={{height:"91.5vh"}}>

          <img className =" img-fluid  Home-Image"src={image} alt="/"/>

          </div>
          
      </div>
      
    
      
    </div>
  )
}

export default Home
