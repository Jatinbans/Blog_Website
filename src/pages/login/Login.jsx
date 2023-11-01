import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const Login = () => {
  const history = useHistory();
  const handleSubmit = (e)=>{
    e.preventDefault();
    history.push("/home");
    
  }
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Username or email address *</span>
            <input type='email' required />
            {/* <input class="user-pass" name="username" type="text" id="username" placeholder="Username" required></input> */}
            <span>Password *</span>
            <input type='password' required />
            <button className='button' >Log in</button>
          </form>
        </div>
      </section>
    </>
  )
}
