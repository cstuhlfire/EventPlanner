import React from "react";


const Announcements = ({ data }) => {
    console.log(data);
    return (
        <div>
            {data.map(announcement =>
                <>
                    <p>
                        {announcement.author}
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