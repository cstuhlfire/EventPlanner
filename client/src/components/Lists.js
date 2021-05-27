import React, { useState } from "react";
import "./Lists.css";
import API from "../utils/API"


const Lists = ({ data }) => {
    const [listOpened, setListOpened] = useState(null);
    const handleOpen = (item) => {
        console.log("clicked item: ", item);
        setListOpened(item);
    }
    const handleClose = () => {
        setListOpened(null)
    }
    
    function saveList(event){

        let name = document.querySelector("#listName").value;
    
        API.createList({
            name: name
        })
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
                                <div>
                                    {list.items.map(item =>
                                        <>
                                            <div className="listItems">

                                                <div className="field">
                                                    <label className="label">Name</label>
                                                    <div className="control">
                                                        <input className="input" type="text" placeholder="Text input" id="listName"></input>
                                                    </div>
                                                    <p className="help">{}</p>
                                                </div>

                                                <div className="field">
                                                    <label className="label">Assigned To:</label>
                                                    <div className="control">
                                                        <input className="input" type="text" placeholder="Text input"></input>
                                                    </div>
                                                    <p className="help">{item.name}</p>
                                                </div>

                                                <div className="field">
                                                    <label className="label">Assigned?</label>
                                                    <div className="control">
                                                        <input className="input" type="text" placeholder="Text input"></input>
                                                    </div>
                                                    <p className="help">{item.name}</p>
                                                </div>

                                                <div className="field">
                                                    <label className="label">Status</label>
                                                    <div className="control">
                                                        <input className="input" type="text" placeholder="Text input"></input>
                                                    </div>
                                                    <p className="help">{item.name}</p>
                                                </div>



                                                <p>
                                                    • {item.itemName}
                                                </p> 
                                                <p>
                                                    • {item.assignedTo}
                                                </p> 
                                                <p>
                                                    • {item.status}
                                                </p> 
                                                <p>
                                                    • {item.assigned}
                                                </p>



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