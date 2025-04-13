import React from 'react'
import "../components/Login.css"
import login from "../assets/imageee.jpeg"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
<div className="cardd">
  <div className="card22">
    <form className="formm">
      <p id="heading">Login</p>
      <div className="field">
        <div className="fieldd">
        <input type="text" className="input-fieldd" placeholder="Username" autoComplete="off" />
      </div>
      </div>
      <div className="fieldd">
        <input type="password" className="input-fieldd" placeholder="Password" autoComplete="off" />
      </div>
      <div className="btnn">
        <button className="button11">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <button className="button22">Sign Up</button>
      </div>
      <button className="button33">Forgot Password</button>
    </form>
  </div>
</div>
<Link className="btn" href="/SingUp">Sing Up</Link>

</>

  



  )
}

export default Login