import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import "./Lists.css";

let clickedListId = "";

const SingleList = (props) => {
  const [listItems, setListItems] = useState([]);
  const params = useParams();
  const id = params.id;
  clickedListId= props.clickedListId

  useEffect(() => {
    loadListItems();
  }, []);
  function loadListItems() {
    console.log("enteredLoadListItems");
    API.getOneEvent(id)
      .then((res) => {
        let chosenList = res.data.lists.filter(
          (list) => list._id === clickedListId
        );
        setListItems(chosenList.items);
        console.log(chosenList.items);
      })
      .catch((err) => console.log(err));
  }

  function addListItem(event) {
    let itemNameInp = document.querySelector("#itemName").value;
    let assignedToInp = document.querySelector("#assignedTo").value;
    let assignedBoo = document.querySelector("#assigned").value;
    let statusInp = document.querySelector("#status").value;
    
    console.log(itemNameInp);    
    console.log(assignedToInp);
    console.log(assignedBoo);    
    console.log(statusInp);    

    // API.createListItem({
    //   name: name,
    // });
  }

  function handleClickedItem(itemid){
    console.log(itemid)
  }

  console.log(listItems);
  return (
    <div>
      {listItems.map((item) => (
        <p>
          <button onClick={() => handleClickedItem(item._id)}>{item.itemName}</button>•{" "}
          {item.itemName}• {item.assignedTo.username}• {item.status}•{" "}
          {item.assigned}
        </p>
      ))}

      <div className="listItemInputs">
        <div className="field">
          <div className="control">
            <label className="label" for="itemName">
              Name
            </label>
            <input
              className="input"
              type="text"
              placeholder="Name"
              id="itemName"
            ></input>

            <label className="label" for="assignedTo">
              Assigned To:
            </label>
            <input className="input" type="text" placeholder="Assign" id="assignedTo"></input>

            <label className="label" for="assigned">
              Assigned?
            </label>
            <input className="input" type="checkbox" id="assigned"></input>

            <label className="label" for="status">
              Status
            </label>
            <input
              className="input"
              type="text"
              placeholder="status"
              id="status"
            ></input>
            <button onClick={addListItem}>Add!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleList;
