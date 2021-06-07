import React, {useState} from 'react';
import "./Login.css";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockIcon from '@material-ui/icons/Lock';
import API from "../utils/API";


 function Login() {

    let [loginObj, setLoginObj] = useState({username: "",
                                            password: "",
                                            userId: "",
                                            loggedIn: false,
                                            loginFailed: false});
    
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setLoginObj({...loginObj, [name]: value})
    };

    function logUserIn (event) {
        // event.preventDefault();

        // let userinput = document.querySelector(`#username`).value;
        // let passwordinput = document.querySelector(`#password`).value;
       
        API.checkUser({
            username: loginObj.username,
            password: loginObj.password
        })
        .then((res) => {
            setLoginObj({...loginObj, username: res.data.user, 
                                        userId: res.data.user_id, 
                                        loggedIn: true,
                                        loginFailed: false});
            
            sessionStorage.setItem("loginInfo", res.data.user_id);
            sessionStorage.setItem("loginName", res.data.user);
            return true;
        })
        .catch((err) => {
            setLoginObj({...loginObj, loggedIn: false,
                                    loginFailed: true});
            return false;
        })
    } 

    return (
    <div id="column">    
        <div className="column">
            <div className="cont columns">
            <div className="column ">        
                 {/* Form Starts Here */}
            <div className="column">
                <div>
                    <h3 className="head">Login</h3>
                </div>
                 <div className="email field">
                     <p className="control has-icons-left has-icons-right">
                        <input 
                            className="box email-input input" 
                            name="username" 
                            onChange={handleInputChange}
                            type="email" 
                            id="username" 
                            placeholder="Username">
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
                    <input className="box pass-input input" 
                            name="password" 
                            onChange={handleInputChange}
                            type="password" 
                            id="password" 
                            placeholder="Password">
                    </input>

                    <span className="icon is-small is-left">
                        <LockIcon style={{fontSize: "large"}}></LockIcon>
                    </span>
                </p>
                </div>
                    {(loginObj.loginFailed) ?
                        <p style={{visibility: "visible"}}>Login failed. Please try again.</p>
                        : (loginObj.loggedIn) ?
                        <p style={{visibility: "visible"}}>Welcome! You are logged in as {loginObj.username}.</p>
                        :<p style={{visibility: "hidden"}}>Login</p>
                    } 
                <div className="field">
                    <p className="control">
                     <button className="button is-success" onClick={logUserIn}>
                         Login
                     </button>
                    </p>
                <div>
                    <p id="createLink">Don't have an account? Create one <a href="/CreateAccount">here</a></p>
                </div>
                </div>
                </div>
            </div>  
        </div>
    </div>
</div>
)}

export default Login;