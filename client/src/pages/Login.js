import React from 'react'
import "./Login.css"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockIcon from '@material-ui/icons/Lock';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

 function Login() {
    return (
    <div id="column">    
        <div className="column">
            <div className="cont columns">
            <div className="column ">        
                 {/* Form Starts Here */}
            <div clasName="column">
                <div>
                    <h3 className="head">Log In</h3>
                </div>
                 <div className="email field">
                     <p className="control has-icons-left has-icons-right">
                        <input 
                            className="box email-input input" type="email" placeholder="Username">
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
                    <input className="box pass-input input" type="password" placeholder="Password"></input>
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
                    <p id="createLink">Dont have an account? Create one <a href="/CreateAccount">here</a></p>
                </div>
                </div>
                </div>
            </div>  
        </div>
    </div>
</div>
)}

export default Login;