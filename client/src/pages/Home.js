import React from 'react'
import "./Home.css"


function Home() {
    return (
        <div>
            <div className="testimonial">
               <h1 className="p">Business in the Front, Party in the Back</h1>
               <p className="p">Create an Event or Join one here! </p>
            </div>

            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png"></img>
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                        <strong> event.name </strong>
                        <br></br>
                       event.description
                        <br></br>
                        <small><a>Join</a> · event.duration</small>
                        </p>
                    </div>
                </div>
             </article>
        </div>
    )
}

export default Home
