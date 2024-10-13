import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom'

const Login = () => {
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
    <div className="login container" >
    <h1> Login Here</h1>
    <form action="POST">
    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id=""/>
    <input type="password" onChange={(e)=>{setPasswprd(e.target.value)}} placeholder="Password" name="" id=""/>
   
    <input type="submit" onClick={sumbmit}/>
    <br/>

    <p>OR</p>
    <br/>
    <Link to ="/signup">SignUp </Link>


    </form>
      
    </div>
  )
}

export default Login
