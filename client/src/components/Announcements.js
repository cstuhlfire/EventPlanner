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
        <div>
            {announcement.map(announcement =>
                <>
                    <p>
                        {announcement.author.username}
                    </p>
                    <p>
                        {announcement.text}
                    </p>
                </>
            )}
        </div>
    );
}

export default Announcements;