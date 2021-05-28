import React from "react";
import "./Events.css";
import AddIcon from "@material-ui/icons/Add";
import balloons from "../utils/images/balloons.jpg";
import { Link } from "react-router-dom";


function Events(props) {
  function handleAddEvent(eventId) {
    console.log("Event id: "+ eventId);
  }

  return (
    <div>
      {/* <div className="cc columns features"> */}
      {/* <div  className="cc features"> */}
      <div  className="cc">
        {/* <div className="column is-one-fourth"> */}
        <div className="column">
          <div className="card is-shady">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src={balloons}
                  alt="Placeholder image"
                  className="modal-button"
                  data-target="modal-image2"
                ></img>
              </figure>
            </div>
            <div>
              <button className="joinBtn">
                <AddIcon onClick={() => handleAddEvent(props._id)}></AddIcon>
              </button>
            </div>
            <div className="card-content">
              <div className="content custom-content">
                <h5>{props.title}</h5>
                <p>{props.date}</p>
                <p>{props.time}</p>
                <p>{props.location}</p>
                <Link to={"/event/"+props._id} style={{textDecoration: "none"}}>
                <span
                  className="button is-link modal-button"
                  data-target="modal-image2"
                >
                  View Event
                </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
