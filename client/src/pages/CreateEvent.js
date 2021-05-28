import React from 'react'
import { Link } from "react-router-dom";
import "./CreateEvent.css"
import API from "../utils/API";



function CreateEvent() {

    function saveEvent (event){
        event.preventDefault();

        let nameinput = document.querySelector(`#eventName`).value;
        let locationinput = document.querySelector(`#location`).value;
        let dateinput = document.querySelector(`#date`).value;
        let timeinput = document.querySelector(`#time`).value;
        let descinput = document.querySelector(`#description`).value;
        let imageinput = document.querySelector(`#image`).value;
        
        let dateTimeinput = `${dateinput} ${timeinput}`
 
        console.log(dateTimeinput) 
        console.log(timeinput) 

        API.createEvent({
            eventName: nameinput,
            location: locationinput,
            description: descinput,
            eventDateTime: dateTimeinput,
            lists: [],
            announcements: [],
            comments: [],
            attendees: []

        })


    }


    return (
    <div className="container custom">
        <div className="h1">
            <h1>Create Event</h1>
        </div>
        <div className="field">
        <label className="name label">Event Name</label>
        <div className="control">
            <input className="input" type="text" placeholder="Event Name" id="eventName"></input>
        </div>
        </div>

        <div className="field">
        <label className="label">Event Location</label>
        <div className="control">
            <input className="input" type="address" placeholder="Address" id="location"></input>
        </div>
        </div>

        <div className="field">
        <label className="label">Date</label>
        <div className="control">
            <input className="input" type="date" placeholder="Date" id="date"></input>
        </div>
        </div>
        <div className="field">
        <label className="label">Time</label>
        <div className="control">
            <input className="input" type="time" id="time"></input>
        </div>
        </div>

        <div className="field">
        <label className="label">Image</label>
        <div className="control">
            <div className="select">
            <select id="image">
                <option>Select dropdown</option>
                <option value="confetti.jpg">Get together</option>
                <option value="balloons.jpg">Birthday</option>
                <option value="pool.jpg">Graduation</option>
                <option value="balloons.jpg">Wedding</option>
            </select>
            </div>
        </div>
        </div>

        <div className="field">
        <label className="label">Event Description</label>
        <div className="control">
            <textarea className="input" placeholder="Textarea" id="description"></textarea>
        </div>
        </div>
        <div className="field is-grouped">
        <div className="btnCont control">
            {/* <button className="subbttn button is-link" onClick={saveEvent}>Submit</button> */}
            <Link to="/" onClick={saveEvent} className="subbttn button is-link" style={{textDecoration: "none"}}>Create</Link>
        </div>
        </div>   
    </div>
    )
}

export default CreateEvent
