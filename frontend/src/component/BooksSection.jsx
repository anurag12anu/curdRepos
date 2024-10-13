import React from 'react'
import { Link } from 'react-router-dom';

const BooksSection = ({data}) => {
    console.log(data);
  return (
    <div className="d-flex justify-content-around align-items-center  flex-wrap">
    {
        data && 
        data.map((item,index)=>(
    < div className="" style=
    {{
        width:"200px",height:"350px",
        border:"1px solid white",
        borderRadius:"20px",
    }}>
    <div>
    <img 
    style={{width:"200px",height:"210px",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}}
    className="img-fluid"
    
    src={item.image} alt="/"/>
    </div>

    <h6 style ={{fontSize :"15px"}}className="text-white px-2 m-0">{item.booksname.slice(0,20)}....</h6>
    <b style ={{fontSize:"30px",color:"red"}}className="m-0 px-2">Rs.{item.prise} </b>

    <div className="d-flex justify-content-around align-items-center">

    <button className="btn btn-primary" > UPDATE   </button>
    <button className="btn btn-danger">   Delete</button>
    </div>
    
     </div>
     
     )
     )
     }
      
    </div>
  )
}

export default BooksSection
