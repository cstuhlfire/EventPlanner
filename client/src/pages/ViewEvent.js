import React, { useState, useEffect } from "react";
import "./ViewEvents.css";
import ToDoList from "../components/ToDoList";
import Announcements from "../components/Announcements";
import Lists from "../components/Lists";
import API from "../utils/API";
import utils from "../utils/utils";
import { useParams } from "react-router-dom";

function ViewEvent() {
  const [chosenEvent, setChosenEvent] = useState([]);
  const [chosenEventDate, setChosenEventDate] = useState([]);
  const [chosenEventTime, setChosenEventTime] = useState([]);
  const [lists, setLists] = useState([]);
  const [comments, setComments] = useState([]);
  const [chosenAttendees, setAttendees] = useState([]);
  const [chosenListId, setChosenListId] = useState("");
  const [chosenList, setChosenList] = useState("");
  const [chosenListItems, setChosenListItems] = useState([]);
  const params = useParams();
  const id = params.id;
  // let userId = (sessionStorage.getItem("loginInfo"));
  const [currentUser, setCurrentUser] = useState("");
  
  useEffect(() => {
    setCurrentUser("60b08331637701535d45f188");
    loadEvent();
  }, []);

  function onListClick(event, listid) {
    event.preventDefault();
    console.log("List: " + listid + " was clicked");
    setChosenListId(listid);
    let [filteredList] = chosenEvent.lists.filter(
      (list) => list._id === listid
    );
    let filteredItems = filteredList.items;
    console.log(filteredList);
    console.log(filteredItems);
    setChosenList(filteredList);
    setChosenListItems(filteredItems);
    loadEvent();
  }

  function loadEvent() {
    console.log("enteredLoadEvent");
    API.getOneEvent(id)
      .then((res) => {
        setChosenEvent(res.data);
        setLists(res.data.lists);
        setComments(res.data.comments);
        setAttendees(res.data.attendees);
        let eventTime = utils.formatTime(res.data.eventDateTime);
        let eventDate = utils.formatDate(res.data.eventDateTime);
        setChosenEventTime(eventTime);
        setChosenEventDate(eventDate);
        console.log(res.data.lists);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

    function saveList(event) {
      event.preventDefault();      
      let listNameInput = document.querySelector("#todo").value;      
      API.createList(id, {      
        listName: listNameInput      
      })      
      .catch((err) => console.log(err));      
      API.getOneEvent(id)      
      .then((res) => {      
        setLists(res.data.lists);      
      })
      .catch((err) => console.log(err));
      loadEvent();
    }
    
    function saveListItem(event, listIdToAdd, chosenLiName, chosenLi) {
      event.preventDefault();
      let listItemInput = document.querySelector("#todoitem").value;
      console.log(listItemInput);
      let item = {itemName: listItemInput, assignedTo: currentUser, status: "needed", assigned: true}
      API.addListItem(id, listIdToAdd, { listName:chosenList.listName,
        item
      })
      .catch((err) => console.log(err));
      setChosenListItems([...chosenListItems, item]);
      loadEvent();
    }

    function updateListItem(event, listIdToUpdate, item, update) {
        event.preventDefault();
        let itemData = item
        if (update === "assignment"){
            let userAssign = "60af3c3039c3b62a4b95781b"
            itemData= {itemName: item.name, assignedTo: userAssign, status: item.status, assigned: item.assigned, _id: item._id }
        } else if (update ==="status") {
            let statusInput = document.querySelector("#statusUpdate").value;
            itemData= {itemName: item.name, assignedTo: item.assignedTo, status: statusInput, assigned: item.assigned, _id: item._id}
        } else{
            itemData= {itemName: item.name, assignedTo: item.assignedTo, status: item.status, assigned: item.assigned, _id: item._id}
        }
        
        API.updateListItem(id, listIdToUpdate, item._id, itemData);
    }

  
  console.log(id);
  console.log(chosenEvent);
  console.log(lists);
  console.log(chosenList);
  return (
    <div className="container">
      <div className="tile is-ancestor">
        <div className="desc tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <div className="tile is-child notification">
                <p className="title">{chosenEvent.eventName}</p>
                <p className="subtitle">{chosenEvent.description}</p>
                <p className="subtitle">{chosenEventDate}</p>
                <p className="subtitle">{chosenEventTime}</p>
                <p className="subtitle">{chosenEvent.location}</p>
                <p className="subtitle">
                  {chosenAttendees.length > 0
                    ? `Attendees(${chosenAttendees.length}):`
                    : `Be the first attendee!`}
                </p>
                {chosenAttendees.length > 0 ? (
                  <ul>
                    {chosenAttendees.map((attendant) => (
                      <li>{attendant.attendee.username}</li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </div>

              <article className="announcementstitle tile is-child is-scrollable notification is-primary">
                <p className="title">Announcements </p>
                <div className="announcement-content">
                  <Announcements />
                </div>
              </article>
            </div>

            <div className="tile is-parent is-vertical">
              <div className="todo tile is-child">
                <article className="todo notification">
                  <h1>To Do's:</h1>

                  <div className="field has-addons todoInp">
                    <div class="control">
                        <input
                            className="ievent input is-primary"
                            type="text"
                            id="todo"
                            placeholder="add a to do....">
                        </input>
                    </div>
                    <div className="control">
                        <button className="bt" onClick={saveList}>
                            Add
                        </button>
                    </div>
                  </div>
                    <div>
                        {lists.map((list) => (
                            <button
                            className="listButton button column is-full"
                            id={list._id}
                            onClick={(event) => onListClick(event, list._id)}
                            >
                            {list.listName}
                            </button>
                        ))}
                  </div>

                </article>
              </div>

              <div className="todo tile is-child">
                <article className="todo notification">
                  {chosenList === "" ? 
                    (
                    <h3>Choose a to-do list above</h3>
                    ) : 
                    (   <>
                            <h1>{chosenList.listName}</h1>

                            <div className="field has-addons todoInp">
                                    <div class="control">
                                        <input
                                            className="ievent input is-primary"
                                            type="text"
                                            id="todoitem"
                                            placeholder={`add to ${chosenList.listName}...`}>
                                        </input>
                                    </div>
                                    <div className="control">
                                    <button className="bt" onClick={(e) => saveListItem(e, chosenListId, chosenList.listName, chosenList)}>submit</button>
                                    </div>
                            </div>


                            {/* <input id="todo" 
                                placeholder={`add to ${chosenList.listName} ...`}>
                            </input>
                            <button onClick={(e) => saveListItem(e, chosenListId, chosenList.listName)}>submit</button> */}


                            {chosenListItems.map((item) => (
                                <div className="column listItemCons">
                                    <h4>{item.itemName}</h4>
                                    {item.assigned 
                                        ? (<h5>Assigned to {item.assignedTo.username}!</h5>) 
                                        : (<>
                                            <button className="bt" 
                                            onClick={(e) => updateListItem(e, chosenListId, item, "assignment") }
                                            >
                                                Assign Me!
                                            </button>
                                            </>
                                        )
                                    }
                                    {/* <h5>Status: {item.status}</h5> */}
                                  {/* <div className="field has-addons todoInp">
                                    <div class="control">
                                        <input
                                            className="ievent input is-primary"
                                            type="text"
                                            id="statusUpdate"
                                            placeholder="update status">
                                        </input>
                                    </div>
                                    <div className="control">
                                        <button className="bt" 
                                        onClick={(e) => updateListItem(e, chosenListId, item, "status") }
                                        >
                                            Update!
                                        </button>
                                    </div>
                                  </div> */}
                                </div>
                                )
                            )}
                        </>
                    )
                    }
                  {/* <Lists data={testLists} /> */}
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="comments tile is-parent is-scrollable">
          <article className="comments tile is-child notification">
            <div className="content">
              <p className="title">Comments </p>

              <article className="media">
                <div className="media-content">
                  {comments.map((comment) => (
                    <div className="content">
                      <p>
                        <strong>{comment.author.username}</strong>
                        <br></br>
                        {comment.text}
                        <br></br>
                        <small>
                          <a>Like</a> · <a>Reply</a> · 3 hrs
                        </small>
                      </p>
                    </div>
                  ))}
                  {/* <div className="content">
                                        <p>
                                            <strong>Barbara Middleton</strong>
                                            <br></br>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                                            <br></br>
                                            <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                                        </p>
                                    </div>

                                    <article className="media">

                                        <div className="commentmedia-content">
                                            <div className="content">
                                                <p>
                                                    <strong>Sean Brown</strong>
                                                    <br></br>
                                                    Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                                                    <br></br>
                                                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                                </p>
                                            </div>
                                            <article className="media">
                                                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                                            </article>
                                            <article className="media">
                                                Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                                            </article>
                                        </div>

                                    </article>

                                    <article className="media">
                                        <div className="commentmedia-content">
                                            <div className="content">
                                                <p>
                                                    <strong>Kayli Eunice</strong>
                                                    <br></br>
                                                    Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                                                    <br></br>
                                                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                                </p>
                                            </div>
                                        </div>
                                    </article> */}
                </div>
              </article>

              <article className="media">
                <div className="commentmedia-content">
                  <div className="field">
                    <p className="control">
                      <textarea
                        className="textarea"
                        placeholder="Add a comment..."
                      ></textarea>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <button className="button">Post comment</button>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default ViewEvent;
