import React, { useState } from "react";
import "./Lists.css";


const Lists = ({ data }) => {
    const [listOpened, setListOpened] = useState(null);

    const handleOpen = (item) => {
        console.log("clicked item: ", item);
        setListOpened(item);
    }

    const handleClose = () => {
        setListOpened(null);
    }

    return (
        <div>
            {data.map(list =>
                <>
                    <p>
                         <button onClick={() => handleOpen(list)}>
                            {list.listName}
                        </button>
                    </p>
                    {listOpened !== null && 
                        <div className="modal is-active">
                            <div className="modal-background"></div>
                            <div className="modal-content">
                            <input placeholder="to do ..."></input>
                          <button>submit</button>
                                <div>
                                    {list.items.map(item =>
                                        <>
                                            <div className="listItems">

                                            <div class="field">
                                            <label class="label">Name</label>
                                            <div class="control">
                                                <input class="input" type="text" placeholder="Text input"></input>
                                            </div>
                                            </div>

                                            <div class="field">
                                            <label class="label">Username</label>
                                            <div class="control has-icons-left has-icons-right">
                                                <input class="input is-success" type="text" placeholder="Text input" value="bulma"></input>
                                               
                                            </div>
                                            <p class="help is-success">This username is available</p>
                                            </div>

                                            <div class="field">
                                            <label class="label">Email</label>
                                            <div class="control has-icons-left has-icons-right">
                                                <input class="input is-danger" type="email" placeholder="Email input" value="hello@"></input>
                                              
                                            </div>
                                            <p class="help is-danger">This email is invalid</p>
                                            </div>

                                            <div class="field">
                                            <label class="label">Subject</label>
                                            <div class="control">
                                                <div class="select">
                                                <select>
                                                    <option>Select dropdown</option>
                                                    <option>With options</option>
                                                </select>
                                                </div>
                                            </div>
                                            </div>

                                            <div class="field">
                                            <label class="label">Message</label>
                                            <div class="control">
                                                <textarea class="textarea" placeholder="Textarea"></textarea>
                                            </div>
                                            </div>

                                            <div class="field">
                                            <div class="control">
                                                <label class="checkbox">
                                                <input type="checkbox"></input>
                                                I agree to the <a href="#">terms and conditions</a>
                                                </label>
                                                
                                            </div>
                                            </div>

                                            <div class="field">
                                            <div class="control">
                                                <label class="radio">
                                                <input type="radio" name="question">
                                                Yes
                                                </input>
                                                </label>
                                                <label class="radio">
                                                <input type="radio" name="question"></input>
                                                No
                                                </label>
                                            </div>
                                            </div>

                                            <div class="field is-grouped">
                                            <div class="control">
                                                <button class="button is-link">Submit</button>
                                            </div>
                                            <div class="control">
                                                <button class="button is-link is-light">Cancel</button>
                                            </div>
                                            </div>
                                                

                                            




                                                {/*                                                 
                                                <p>
                                                    <h1>Name:</h1>
                                                    • {item.itemName}
                                                </p> 
                                                <p>
                                                    <h1>Assign:</h1>
                                                    • {item.assignedTo}
                                                </p> 
                                                <p>
                                                    <h1>Status:</h1>
                                                    • {item.status}
                                                </p> 
                                                <p>
                                                    <h1>Assigned?</h1>
                                                    • {item.assigned}
                                                </p>  */}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <button onClick={handleClose} class="modal-close is-large" aria-label="close"></button>
                        </div>

                        
                    }
                   
                    
                </>
            )}
        </div>
    );
}

export default Lists;