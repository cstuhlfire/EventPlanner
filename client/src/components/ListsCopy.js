import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import API from "../utils/API"
import "./Lists.css";



const Lists = ({ data }) => {

    const [lists, setLists] = useState([]);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        loadLists()
    }, [])
    function loadLists(){
        console.log("enteredLoadLists")
        API.getOneEvent(id)
        .then(res => {
            setLists(res.data.lists)
            console.log(res.data.lists)
        })
        .catch(err => console.log(err));
    };

    const [listOpened, setListOpened] = useState([]);
    const handleOpen = (list) => {
        console.log("clicked item: ", list);
        setListOpened(list);
        
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


    console.log(lists)
    return (
        <div>
            {lists.map(list =>
                <>
                    <p>
                         <button onClick={() => handleOpen(list)}>
                            {list.listName}
                        </button>
                    </p>
                    {/* {listOpened !== null &&  */}
                        <div className={`modal ${listOpened !== null ? "is-active" : "is-hidden"}`}>
                            <div className="modal-background"></div>
                            <div className="modal-content">
                                <div>
                                        
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
                                                    {/* <p className="help">{item.name}</p> */}
                                                </div>

                                                <div className="field">
                                                    <label className="label">Assigned?</label>
                                                    <div className="control">
                                                        <input className="input" type="text" placeholder="Text input"></input>
                                                    </div>
                                                    {/* <p className="help">{item.name}</p> */}
                                                </div>

                                                <div className="field">
                                                    <label className="label">Status</label>
                                                    <div className="control">
                                                        <input className="input" type="text" placeholder="Text input"></input>
                                                    </div>
                                                    {/* <p className="help">{item.name}</p> */}
                                                </div>

                                                
                                            {list.items.map(item => 
                                                <p>
                                                    • {item.itemName}
                                                    • {item.assignedTo.username}
                                                    • {item.status}
                                                    • {item.assigned}
                                                </p>
                                            )}
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleClose} class="modal-close is-large" aria-label="close"></button>
                        </div>

                        
                    {/* } */}
                   
                    
                </>
            )}
        </div>
    );
}

export default Lists;