import React from 'react'
import "./login.css"
import Google from "../../assets/icons8-google-48.png"
import Facebook from "../../assets/icons8-facebook-48.png"
import Background from "../../assets/Banner.png"

const login = () => {
  return (
    <div className="container">
    <div className="container__login">
      <div className="container_login_contents">
        <div className='lagin-head-container'>
        <h3>Login  <span className='h3_emoji' role="img" aria-label="dog">✌️</span></h3>
        <p>How do I get started Lorem ipsum dolor at</p></div>
        
          <div>
          <button>
          <p className='image-icone-btn' >
            <img className='icon-image' src={Google} alt='google'></img>Sign in with Google</p>
          </button>
          <button>
          <p className='image-icone-btn' >
            <img className='icon-image' src={Facebook} alt='facebook'></img> Sign in with Facebook</p>
          </button>
        </div>
        <div className="container_login_lines">
          <hr />
          <div>
            <p>Or sign in with email</p>
          </div>
          <hr />
        </div>
        <div className="input__boxes">
          <p>Email</p>
          <input className="container_login_inputboxes" type="text" placeholder="Email" text="batukra@" />
          <br />
          <p>Password</p>
          <input className="container_login_inputboxes" type="password" placeholder="Enter your Password" />
          <p className="container__forget_password">Forget password?</p>
          <button>Login</button>
     
        </div>
        <p className="copy__right">@2020 Elegance All Right Reserved.</p>
       
      </div>
    </div>
    <div>
      <img
        className="banner__image"
        src={Background}
        alt="Banner"
      />

    
    </div>
  </div>
  )
}

export default login
