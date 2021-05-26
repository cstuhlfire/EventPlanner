import React, { useState, useEffect } from 'react'
import "./ViewEvents.css"
import ToDoList from "../components/ToDoList";
import Announcements from "../components/Announcements";
import Lists from "../components/Lists";
import API from "../utils/API"
import { useParams } from "react-router-dom";

function ViewEvent() {
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

    const params = useParams();
    const id = params.id;
    const [event, setEvent] = useState({});
    const [announcements, setAnnouncements] = useState(testAnnouncements);
    const [attendees, setAttendees] = useState([]);
    const [lists, setLists] = useState(testLists);

    useEffect(async () => {
        const eventData = await API.getOneEvent(id);
        setEvent(eventData);

        // const announcementsData = await API.getAnnouncements(id);
        // setAnnouncements(announcementsData);

        const attendeesData = await API.getAttendees(id);
        setAttendees(attendeesData);

        const listsData = await API.getLists(id);
        setLists(listsData);
    }, [])

        return (
            <div className="container">
            <div className="tile is-ancestor"> 
                <div className="desc tile is-vertical is-8">
                    <div className="tile is-12">
                    <div className="tile is-parent is-vertical">
                        <article className="announcementstile is-child notification is-primary">
                        <p className="title">Announcements </p>
                            {/* start sticky note here */}
                            <ul>
                                <li>
                                    <a href="#">
                                        <Announcements data={announcements} />
                                    </a>
                                </li>
                            </ul>
                        </article>
                    
                        <article className="tile is-child notification ">
                        <p className="title">Event Information</p>
                        <p className="subtitle">{event.description}</p>
                        <p className="subtitle">{event.date}</p>
                        <p className="subtitle">{event.location}</p>
                        <p className="subtitle">{attendees.length > 0 && <>Attendees: {attendees.length}</>}</p>
                        </article>
                    </div>
                    <div className="todo tile  is-parent">
                        <article className="todo tile is-child notification is-info">
                            <h1>To Do</h1>
                          <input placeholder="to do ..."></input>
                          <button>submit</button>
                            <Lists data={lists} />
                        </article>
                        {/* start comments */}
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
