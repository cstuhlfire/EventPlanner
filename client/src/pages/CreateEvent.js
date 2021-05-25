import React from 'react'
import "./CreateEvent.css"


function CreateEvent() {
    return (
    <div className="container">
        <div className="h1">
            <h1>Create Event</h1>
        </div>
        <div className="field">
        <label className="name label">Event Name</label>
        <div className="control">
            <input className="input" type="text" placeholder="Event Name"></input>
        </div>
        </div>

        <div className="field">
        <label className="label">Event Location</label>
        <div className="control">
            <input className="input" type="address" placeholder="Address" ></input>
        </div>
        </div>

        <div className="field">
        <label className="label">Date</label>
        <div className="control">
            <input className="input" type="date" placeholder="Date" ></input>
        </div>
        </div>
        <div className="field">
        <label className="label">Time</label>
        <div className="control">
            <input className="input" type="time" ></input>
        </div>
        </div>

        <div className="field">
        <label className="label">Image</label>
        <div className="control">
            <div className="select">
            <select>
                <option>Select dropdown</option>
                <option>Get together</option>
                <option>Birthday</option>
                <option>Graduation</option>
                <option>Wedding</option>
            </select>
            </div>
        </div>
        </div>

        <div className="field">
        <label className="label">Event Description</label>
        <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
        </div>
        <div className="field is-grouped">
        <div className="btnCont control">
            <button className="subbttn button is-link">Submit</button>
        </div>
        </div>   
    </div>
    )
}

export default CreateEvent
