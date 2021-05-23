import React from 'react'
import "./Login.css"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockIcon from '@material-ui/icons/Lock';

 function Login() {
    return (
        <div id="column">
            
            

            {/* This is the left column */}
             
            <div className="cont columns">
        
            <div className="column ">        
     
        {/* Log in Form */}
          
            <div clasName="column">
                <div>
                    <h3 className="head">Log In</h3>
                </div>
            <div className="email field">
                <p className="control has-icons-left has-icons-right">
                    <div></div>
                    <input 
                    className="email-input input" type="email" placeholder="Email">
                    </input>
                    <span className="icon is-small is-left">
                        <PermIdentityIcon></PermIdentityIcon>
                    </span>
                    <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                    </span>
                </p>
             </div>
                <div className="field">
                <p className="email control has-icons-left">
                    <input className="pass-input input" type="password" placeholder="Password"></input>
                    <span className="icon is-small is-left">
                        <LockIcon style={{fontSize: "large"}}></LockIcon>
                    </span>
                </p>
                </div>
                <div className="field">
                <p className="control">
                    <button className="button is-success">
                    Login
                    </button>
                </p>
                <div>
                    <p>New here? Create an Account with us Here</p>
                </div>
                </div>
             </div>
        </div> 
        
        
    </div>
    </div>
)}

export default Login;