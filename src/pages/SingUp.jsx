import React from 'react'
import "../components/SingUp.css"
function SingUp() {
  return (
<div className="cardd">
  <div className="card22">
    <form className="formm">
      <p id="heading">Sign Up</p>

      <div className="fieldd">
        <input type="text" className="input-fieldd" placeholder="Username" autoComplete="off" />
      </div>

      <div className="fieldd">
        <input type="email" className="input-fieldd" placeholder="Email" autoComplete="off" />
      </div>

      <div className="fieldd">
        <input type="password" className="input-fieldd" placeholder="Password" autoComplete="off" />
      </div>

      <div className="fieldd">
        <input type="password" className="input-fieldd" placeholder="Confirm Password" autoComplete="off" />
      </div>

      <div className="btnn">
        <button className="button11" type="submit">
          &nbsp;&nbsp;&nbsp;&nbsp;Sign Up&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <button className="button22" type="button" >
          Login
        </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default SingUp