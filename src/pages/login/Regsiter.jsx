import React, { useState } from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

export const Regsiter = () => {
  const navigate = useHistory();
//   const notify = ()=>{ 
 
//     // Calling toast method by passing string
//     toast('Hello Geeks') 
// }
  const [user,setUser] = useState({
    email:"",
    username:"",
    password:"",
    confirmPassword:""
  })
  const {email,username,password,confirmPassword} = user;

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

  const handleClick = ()=>{
    console.log(user);
    if(password !== confirmPassword){
      alert("Password must be same");
      return;
    }
    alert("New user Added");
    navigate.push("/home");
  }
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form onSubmit={handleClick}>
            <span>Email address*</span>
            <input onChange={handleChange} value={email} id="email" name="email" type='text' required />
            <span>Username*</span>
            <input onChange={handleChange} value={username} id="username" name="username" type='text' required />
            <span>Password*</span>
            <input onChange={handleChange} value={password} id="password" name="password" type='password' required />
            <span>Conform Password*</span>
            <input onChange={handleChange} value={confirmPassword} id="confirmPassword" name="confirmPassword" type='password' required />
            <button type="submit" className='button'>Register</button>
            <a href="login" id="atag">if already a user ? login</a>
          </form>
        </div>
      </section>
    </>
  )
}
