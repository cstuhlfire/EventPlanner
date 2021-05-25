import React from 'react'
import "./Events.css"
import AddIcon from '@material-ui/icons/Add';

function Events() {
    return (
    <div>
        <div class="cc columns features">
        <div class="column is-one-fourth">
          <div class="card card is-shady">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image" class="modal-button" data-target="modal-image2"></img>
              </figure>
            </div>
            <div>
              <button className="joinBtn">
                <AddIcon></AddIcon>
              </button>
            </div>
            <div class="card-content">
              <div class="content">
                <h4> props.title</h4>
                <p> props.date</p>
                <p> props.time</p>
                <p> props.Loation</p>
                <span class="button is-link modal-button" data-target="modal-image2">View Event</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
    )
}

export default Events
