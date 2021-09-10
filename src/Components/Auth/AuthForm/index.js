
import React, { useState } from "react";
import BackBtn from '../BackBtn';

const AuthForm =()=>{

    const [loginFormShow, setLoginFormShow] = useState(true);
    return (
      <>
      <div className="auth_page">
        <div className="auth-container">
          <div className="box">
            <div className="toggle">
              <h1
                className={loginFormShow ? "active" : ""}
                onClick={() => {
                  setLoginFormShow(true);
                }}
              >
                Login
              </h1>
              <div className="slash-form">/</div>
              <h1
                className={!loginFormShow ? "active" : ""}
                onClick={() => {
                  setLoginFormShow(false);
                }}
              >
                SignUp
              </h1>
            </div>
    
            {loginFormShow ? (
              <form  className="login-form">
                <input type="text"  placeholder=" Username" / >
                <input type="password" placeholder=" password" />
                <button className="login-btn">Log in</button>
              </form>
            ) : (
              <form  className="signup-form">
                <input type="email" placeholder=" email" />
                <input type="text" placeholder=" username" />
                <input type="password" placeholder=" password" />
                <input type="text" placeholder=" adress" />
                <button className="signup-btn">Sign Up</button>
              </form>
            )}
          </div>
        </div>
<BackBtn/>
</div>
        </>
        
      );
}

export default AuthForm;