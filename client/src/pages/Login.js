import React from 'react'
import "./Login.css"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockIcon from '@material-ui/icons/Lock';
import API from "../utils/API";


 function Login() {

    function logUserIn (event) {
        event.preventDefault();

        let userinput = document.querySelector(`#username`).value;
        let passwordinput = document.querySelector(`#password`).value;
        console.log(userinput);
        console.log(passwordinput);

        API.checkUser({
            username: userinput,
            password: passwordinput
        })
    } 





    return (
    <div id="column">    
        <div className="column">
            <div className="cont columns">
            <div className="column ">        
                 {/* Form Starts Here */}
            <div clasName="column">
                <div>
                    <h3 className="head">Login</h3>
                </div>
                 <div className="email field">
                     <p className="control has-icons-left has-icons-right">
                        <input 
                            className="box email-input input" type="email" id="username" placeholder="Username">
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
                    <input className="box pass-input input" type="password" id="password" placeholder="Password"></input>
                    <span className="icon is-small is-left">
                        <LockIcon style={{fontSize: "large"}}></LockIcon>
                    </span>
                </p>
                </div>
                <div className="field">
                    <p className="control">
                     <button className="button is-success" onClick={logUserIn}>
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