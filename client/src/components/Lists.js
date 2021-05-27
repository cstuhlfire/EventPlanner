import React from 'react'
import API from "../utils/API"
import "./Lists.css";



const Lists = ( props ) => {

    // function loadLists(){
    //     console.log("enteredLoadLists")
    //     API.getOneEvent(id)
    //     .then(res => {
    //         setLists(res.data.lists)
    //         console.log(res.data.lists)
    //     })
    //     .catch(err => console.log(err));
    // };

    console.log(props)
    return (
        <>    
           <button onClick={props.onListClick} listid={props.listId}>{props.listName}</button>
        </>
    );
}

export default Lists;