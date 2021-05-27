import React, { useState, useEffect } from 'react'
import "./ViewEvents.css"
import ToDoList from "../components/ToDoList";
import Announcements from "../components/Announcements";
import Lists from "../components/Lists";
import API from "../utils/API"
import { useParams } from "react-router-dom";


function ViewEvent() {
    const [chosenEvent, setChosenEvent] = useState([]);
    const [lists, setLists] = useState([]);
    const [chosenListId, setChosenListId] = useState("");
    const [chosenList, setChosenList] = useState("");
    const [chosenListItems, setChosenListItems] = useState([]);
    const params = useParams();

    const id = params.id;
    const testAnnouncements = [
        {
            "author": "Caitlyn",
            "text": "Testing!!! lol :)"
        }
    ];
    const testLists = [
        {
            "listName": "Test List Name",
            "items": [
                {
                    "itemName": "test item name",
                    "assignedTo": "caitlyn",
                    "status": "Done",
                    "assigned": "Yesterday"
                }
            ]
        }
    ]

    useEffect(() => {
        loadEvent()
    }, [])

    function onListClick (event, listid) {
        event.preventDefault();
        console.log("List: "+listid+" was clicked")
        setChosenListId(listid);
        let [filteredList] = chosenEvent.lists.filter(list => list._id === listid);
        let filteredItems = filteredList.items
        console.log(filteredList)
        console.log(filteredItems)
        setChosenList(filteredList)
        setChosenListItems(filteredItems)
    }
   
    function loadEvent(){
        console.log("enteredLoadEvent")
        API.getOneEvent(id)
        .then(res => {
            setChosenEvent(res.data)
            setLists(res.data.lists)
            console.log(res.data.lists)
            console.log(res.data)
        })
        .catch(err => console.log(err));
    };

    function saveList(event){
        event.preventDefault()
        let name = document.querySelector("#todo").value;
        API.createList({
            name: name
        })
    }
    console.log(id)
    console.log(chosenEvent)
    console.log(lists)
    console.log(chosenList)
    return (
            
        <div className="container">

            <div className="tile is-ancestor"> 
                
                <div className="desc tile is-vertical is-8">
                    
                    <div className="tile">
                        
                        <div className="tile is-parent is-vertical">

                            <article className="tile is-child notification ">
                                <p className="title">Event Information</p>
                                <p className="subtitle">{chosenEvent.description}</p>
                                <p className="subtitle">{chosenEvent.eventDateTime}</p>
                                <p className="subtitle">{chosenEvent.location}</p>
                                {/* <p className="subtitle">{event.attendees.length > 0 && <>Attendees: {event.attendees.length}</>}</p> */}
                            </article>
                            
                            <article className="announcements tile is-child notification is-primary">
                                <p className="title">Announcements </p>
                                {/* start sticky note here */}
                                <ul>
                                    <li>
                                        <a href="#">
                                            <Announcements data={testAnnouncements} />
                                        </a>
                                    </li>
                                </ul>
                            </article>

                        </div>


                        <div className="tile is-parent is-vertical">

                            <div className="todo tile is-child">
                                <article className="todo notification is-info">
                                    <h1>To Do's:</h1>
                                    <input id="todo"placeholder="add a to do ..."></input>
                                    <button onClick={saveList}>submit</button>
                                    {/* {lists.map(list=> <Lists listName={list.listName} listid={list._id} onListClick={onListClick}/>)} */}
                                    {lists.map(list=> <button className="button" id={list._id} onClick={(event) => onListClick(event, list._id)} >{list.listName}</button>)}
                                    {/* <button onClick={props.onListClick} listid={props.listId}>{props.listName}</button> */}

                                </article>
                            </div>
                            <div className="todo tile is-child">
                                <article className="todo notification is-info">
                                    {/* <h1>{chosenList.listName}</h1> */}
                                    {/* <input id="todo"placeholder="to do ..."></input>
                                    <button onClick={saveList}>submit</button> */}
                                    {chosenList === "" ? <h3>Choose a to-do list above</h3> : <h1>{chosenList.listName}</h1>}
                                    {chosenList === "" ? "" : <input id="todo"placeholder={`add to ${chosenList.listName} ...`}></input> }
                                    {chosenList === "" ? "" : <button onClick={saveList}>submit</button> }
                                    {chosenList === "" ? "" : chosenListItems.map(item => <p>{item.itemName}</p>)}
                                    {/* <Lists data={testLists} /> */}
                                </article>
                                {/* start comments */}
                            </div>

                        </div>


                    </div>
                    
                </div>

                <div className="comments tile is-parent is-scrollable">
                    <article className="comments tile is-child notification is-success">
                    <div className="content">
                        <p className="title">Comments </p>
                        <article className="media">

                        <div className="media-content">
                            <div className="content">
                            <p>
                                <strong>Barbara Middleton</strong>
                                <br></br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                                <br></br>
                                <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                            </p>
                            </div>

                            <article className="media">
                        
                            <div className="commentmedia-content">
                                <div className="content">
                                <p>
                                    <strong>Sean Brown</strong>
                                    <br></br>
                                    Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                                    <br></br>
                                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                </p>
                                </div>

                                <article className="media">
                                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                                </article>

                                <article className="media">
                                Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                                </article>
                            </div>
                            </article>

                        <article className="media">
                            <div className="commentmedia-content">
                                <div className="content">
                                    <p>
                                        <strong>Kayli Eunice</strong>
                                        <br></br>
                                        Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                                        <br></br>
                                        <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                    </p>
                                </div>
                            </div>
                        </article>
                        </div>
                        </article>
                        <article className="media">
                            <div className="commentmedia-content">
                                <div className="field">
                                    <p className="control">
                                        <textarea className="textarea" placeholder="Add a comment..."></textarea>
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control">
                                        <button className="button">Post comment</button>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    </article>
                </div> 
           
            </div>

        </div>
    )
}

export default ViewEvent
