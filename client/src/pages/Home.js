import React, { useState, useEffect } from "react";
import "./Home.css";
import Events from "../components/Events";
import SearchIcon from '@material-ui/icons/Search';
import API from "../utils/API";
import utils from "../utils/utils";


function Home() {
  let userId = (sessionStorage.getItem("loginInfo"));
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents()
  }, [])

  function loadEvents() {
    API.getEvents()
      .then(res => {
        // setEvents(res.data) - potentially
        //console.log(res.data);
        setEvents(res.data);
      })
    .catch(err => console.log(err));
  };

    return (
        <div>
            <div className="testimonial">
            <svg>
              <text x="50%" y="60%"  textAnchor="middle">
               It's Party Time
              </text>
            </svg>
               <p className="p">Create an Event or Join one here! </p>
            </div>
            <div className="search">
                <input className=" i input is-primary" type="text" placeholder="Search Event">
                </input>
             <button className="bt is-left" style={{marginTop: "3%"}}>
               <SearchIcon/>               
            </button>
            </div>

      <div>
         
        {/* map event component here */}
        {/* <div className="column> */}
        <div className="columns is-desktop is-multiline" style={{paddingLeft: "15px"}}>
            {/* { events.length > 0 && events.map(event => */}
          {events.map((event)=> <Events key={Math.random} title={event.eventName} date={utils.formatDate(event.eventDateTime)} time={utils.formatTime(event.eventDateTime)} location={event.location} image={event.eventImage} _id={event._id}></Events>)}
        </div>
      </div>
    </div>
    )}

export default Home
