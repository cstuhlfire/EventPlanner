import React, { useState } from "react";
import "./Lists.css";


const Lists = ({ data }) => {
    const [listOpened, setListOpened] = useState(null);

    const handleOpen = (item) => {
        console.log("clicked item: ", item);
        setListOpened(item);
    }

    const handleClose = () => {
        setListOpened(null)
    }

    return (
        <div>
            {data.map(list =>
                <>
                    <p>
                         <button onClick={() => handleOpen(list)}>
                            {list.listName}
                        </button>
                    </p>
                    {listOpened !== null && 
                        <div className="modal is-active">
                            <div className="modal-background"></div>
                            <div className="modal-content">
                                <div>
                                    {list.items.map(item =>
                                        <>
                                            <div className="listItems">
                                                <p>
                                                    • {item.itemName}
                                                </p> 
                                                <p>
                                                    • {item.assignedTo}
                                                </p> 
                                                <p>
                                                    • {item.status}
                                                </p> 
                                                <p>
                                                    • {item.assigned}
                                                </p> 
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <button onClick={handleClose} class="modal-close is-large" aria-label="close"></button>
                        </div>

                        
                    }
                   
                    
                </>
            )}
        </div>
    );
}

export default Lists;