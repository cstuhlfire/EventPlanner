import React from "react";
import "./Events.css";
import AddIcon from "@material-ui/icons/Add";
import balloons from "../utils/images/balloons.jpg";
import { Link } from "react-router-dom";
import API from "../utils/API";


function Events(props) {
  let userId = (sessionStorage.getItem("loginInfo"));

  function handleAddEvent(eventId) {
    console.log("User id:"+userId);
    console.log("Event id: "+ eventId);
    

    API.addAttendee(eventId, {
      attendee: userId, host: false
      })
      .then((res) => {
        console.log(res.data);
        return true;
      })
      .catch((err) => {
          console.log(err);
          return false;
  })

    if (userId){
      console.log("save user to event");
    }
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
                {(userId) ? 
                <AddIcon onClick={() => handleAddEvent(props._id)}></AddIcon>
                : <Link to="/login"><AddIcon ></AddIcon></Link>
                }
              </button>
            </div>
            <div className="card-content">
              <div className="content custom-content">
                <h5>{props.title}</h5>
                <p>{props.date}</p>
                <p>{props.time}</p>
                <p>{props.location}</p>
                {(userId) ?
                    <Link to={"/event/"+props._id} style={{textDecoration: "none"}}>
                    <span
                      className="button is-link modal-button"
                      data-target="modal-image2">
                      View Event
                    </span>
                    </Link>
                  : <Link to={"/login"} style={{textDecoration: "none"}}>
                  <span
                    className="button is-link modal-button"
                    data-target="modal-image2">
                    View Event
                  </span>
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
