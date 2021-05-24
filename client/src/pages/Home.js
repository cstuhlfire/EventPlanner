import React from 'react'
import "./Home.css"
import Events from "../components/Events"


function Home() {
    return (
        <div>
            <div className="testimonial">
               <h1 className="p">Business in the Front, Party in the Back</h1>
               <p className="p">Create an Event or Join one here! </p>
            </div>
        <Events />
        </div>
    )
}

export default Home
