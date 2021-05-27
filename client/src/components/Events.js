import React from "react";
import "./Events.css";
import AddIcon from "@material-ui/icons/Add";
import balloons from "../utils/images/balloons.jpg";
import { Link } from "react-router-dom";


function Events(props) {
  return (
    <div>
      {/* <div class="cc columns features"> */}
      <div class="cc features">
        {/* <div class="column is-one-fourth"> */}
        <div class="column">
          <div class="card card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src={balloons}
                  alt="Placeholder image"
                  class="modal-button"
                  data-target="modal-image2"
                ></img>
              </figure>
            </div>
            <div>
              <button className="joinBtn">
                <AddIcon></AddIcon>
              </button>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>{props.title}</h4>
                <p>{props.date}</p>
                <p>{props.time}</p>
                <p>{props.location}</p>
                <Link to={"/event/"+props._id} style={{textDecoration: "none"}}>
                <span
                  class="button is-link modal-button"
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
