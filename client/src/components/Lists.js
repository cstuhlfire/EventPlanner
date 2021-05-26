import React from "react";
import "./Lists.css";


const Lists = ({ data }) => {
    console.log(data);

    const handleClick = (item) => {
        console.log("clicked item: ", item);
    }

    return (
        <div>
            {data.map(list =>
                <>
                    <p>
                         <button onClick={() => handleClick(list)}>
                            {list.listName}
                        </button>
                    </p>
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
                    
                </>
            )}
        </div>
    );
}

export default Lists;