import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import API from "../utils/API"



const Announcements = () => {
    const [announcement, setAnnouncement] = useState([]);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        loadAnnouncements()
    }, [])
    function loadAnnouncements(){
        console.log("enteredLoadAnnouncement")
        API.getOneEvent(id)
        .then(res => {
            setAnnouncement(res.data.announcements)
            // console.log(res.data.announcements)
        })
        .catch(err => console.log(err));
    };

    // console.log(announcement)
    return (
      <div className="is-parent">
        <ul className="is-child">
        {announcement.map(announcement =>
                <li>
                    <a href="#" style={{textDecoration: "none"}}>
                    <p>
                        {announcement.author.username}
                        <br></br>
                        {announcement.text}
                    </p>
                    </a>
                </li>
        )}
        </ul>
        </div>
    );
}

export default Announcements;