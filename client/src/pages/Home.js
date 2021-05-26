import React, { useEffect } from "react";
import "./Home.css";
import Events from "../components/Events";
import SearchIcon from '@material-ui/icons/Search';
import API from "../utils/API";


function Home() {
  useEffect(() => {
    loadEvents()
  }, [])

  function loadEvents() {
    API.getEvents()
      .then(res => 
        // setEvents(res.data) - potentially
        console.log(res.data)
      )
      .catch(err => console.log(err));
  };
    return (
        <div>
            <div className="testimonial">
            <svg>
              <text x="50%" y="60%"  text-anchor="middle">
               It's Party Time
              </text>
            </svg>
               <p className="p">Create an Event or Join one here! </p>
            </div>
            <div className="search">
                <input className=" i input is-primary" type="text" placeholder="Search Event">
                </input>
             <button className="bt is-left">
               <SearchIcon></SearchIcon>               
            </button>
            </div>

      <div>
          <div className="testimonial">
          <svg>
            <text x="50%" y="60%"  text-anchor="middle">
              Its Party Time
            </text>
          </svg>
              <p className="p">Create an Event or Join one here! </p>
          </div>
          <div className="search">
              <input className=" i input is-primary" type="text" placeholder="Search Event">
              </input>
            <button className="bt is-left">
              <SearchIcon></SearchIcon>               
          </button>
          </div>

        {/* map event component here */}
        <div className="column">
            { events.length > 0 && events.map(event =>
                <Events 
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                />
            )}
        </div>
      </div>
    </div>
    )}

export default Home
