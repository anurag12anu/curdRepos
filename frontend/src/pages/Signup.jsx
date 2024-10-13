import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom'

const Signup= () => {
    const [email,setEmail]=useState('');
    const [password,setPasswprd]=useState('');
    async function sumbmit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:1000/",{
                email,
                password

            });

        }
        catch{

        }
    }

    
  return (
    <div className="login">
    <h1> Login Here</h1>
    <form action="POST">
    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id=""/>
    <input type="password" onChange={(e)=>{setPasswprd(e.target.value)}} placeholder="Password" name="" id=""/>
   
    <input type="submit" onClick={sumbmit}/>
    <br/>

    <p>OR</p>
    <br/>
    <Link to ="/">Login Page</Link>


    </form>
      
    </div>
  )
}

export default Login
