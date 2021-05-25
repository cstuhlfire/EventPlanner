import React from 'react'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockIcon from '@material-ui/icons/Lock';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import "./CreateAccount.css";
import API from "../utils/API"


function CreateAccount() {


    function saveUser (event){
        event.preventDefault();

        let userinput = document.querySelector(`#username`).value;
        let phoneinput = document.querySelector(`#phone`).value.toString();
        let emailinput = document.querySelector(`#email`).value;
        let passwordinput = document.querySelector(`#password`).value;

        console.log(userinput);
        console.log(phoneinput);
        console.log(emailinput);
        console.log(passwordinput);

        API.saveUser({

            username: userinput,
            password: passwordinput,
            email: emailinput,
            phone: phoneinput

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
                    <h3 className="head">Create Account</h3>
                </div>
                 
             <div className="field">
                <p className="email control has-icons-left">
                    <input className="pass-input input" type="text" id="username" placeholder="Username"></input>
                    <span className="icon is-small is-left">
                        <PermIdentityIcon></PermIdentityIcon>
                    </span>
                </p>
            </div>
             <div className="field">
                <p className="email control has-icons-left">
                    <input className="pass-input input" type="text" id="phone" placeholder="Phone Number"></input>
                    <span className="icon is-small is-left">
                        <PhoneIcon></PhoneIcon>
                    </span>
                </p>
            </div>
             <div className="field">
                <p className="email control has-icons-left">
                    <input className="email-input input" type="email" id="email" placeholder="Email"></input>
                    <span className="icon is-small is-left">
                        <MailOutlineIcon style={{fontSize: "large"}}></MailOutlineIcon>
                    </span>
                </p>
            </div>
             <div className="field">
                <p className="email control has-icons-left">
                    <input className="pass-input input" type="password" id="password" placeholder="Password"></input>
                    <span className="icon is-small is-left">
                        <LockIcon style={{fontSize: "large"}}></LockIcon>
                    </span>
                </p>
            </div>
                <div className="field">
                    <p className="control">
                     <button className="button is-success" onClick={saveUser}>
                         Login
                     </button>
                    </p>
                <div>
                    <p id="createLink">Already have an account? Login <a href="/login">here</a>!</p>
                </div>
                </div>
                </div>
            </div>  
        </div>
    </div>
</div>
        
    )
}

export default CreateAccount

