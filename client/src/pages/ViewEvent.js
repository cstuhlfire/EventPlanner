import React, { useState, useEffect } from "react";
import "./ViewEvents.css";
import Announcements from "../components/Announcements";
import API from "../utils/API";
import utils from "../utils/utils";
import { useParams } from "react-router-dom";

function ViewEvent() {
  const [chosenEvent, setChosenEvent] = useState([]);
  const [chosenEventDate, setChosenEventDate] = useState([]);
  const [chosenEventTime, setChosenEventTime] = useState([]);
  const [lists, setLists] = useState([]);
  const [comments, setComments] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [chosenAttendees, setAttendees] = useState([]);
  const [chosenListId, setChosenListId] = useState("");
  const [chosenList, setChosenList] = useState("");
  const [chosenListItems, setChosenListItems] = useState([]);
  const params = useParams();
  const id = params.id;
  let userId = (sessionStorage.getItem("loginInfo"));
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
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
        setCurrentUser(userId);
        setChosenEvent(res.data);
        setLists(res.data.lists);
        setComments(res.data.comments);
        setAttendees(res.data.attendees);
        setAnnouncements(res.data.announcements);
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
      listName: listNameInput,
    }).catch((err) => console.log(err));
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
    let item = {
      itemName: listItemInput,
      assignedTo: currentUser,
      status: "needed",
      assigned: true,
    };
    API.addListItem(id, listIdToAdd, {
      listName: chosenList.listName,
      item,
    }).catch((err) => console.log(err));
    setChosenListItems([...chosenListItems, item]);
    loadEvent();
  }

  function makeAnnouncement(event){
    event.preventDefault();
    let announcementInput = document.querySelector("#aText").value;
    console.log(announcementInput);
    let announcement = {
      author: currentUser,
      text: announcementInput,
    };
    API.addAnnouncement(id, announcement)
    .catch((err) => console.log(err));
    setAnnouncements([announcement, ...announcements]);
    loadEvent();

  }
  function makeComment(event){
    event.preventDefault();
    let commentInput = document.querySelector("#commText").value;
    console.log(commentInput);
    let comment = {
      author: currentUser,
      text: commentInput,
    };
    API.addComment(id, comment)
    .catch((err) => console.log(err));
    setComments([comment, ...comments]);
    loadEvent();

  }
  function deleteComment(event, commentId){
    event.preventDefault();
    API.deleteComment(id, commentId)
    .catch((err) => console.log(err));
    setComments([(comments.filter(comment => comment._id !== commentId))])
    // loadEvent();
  }

  function updateListItem(event, listIdToUpdate, item, update) {
    event.preventDefault();
    let itemData = item;
    if (update === "assignment") {
      let userAssign = "60af3c3039c3b62a4b95781b";
      itemData = {
        itemName: item.name,
        assignedTo: userAssign,
        status: item.status,
        assigned: item.assigned,
        _id: item._id,
      };
    } else if (update === "status") {
      let statusInput = document.querySelector("#statusUpdate").value;
      itemData = {
        itemName: item.name,
        assignedTo: item.assignedTo,
        status: statusInput,
        assigned: item.assigned,
        _id: item._id,
      };
    } else {
      itemData = {
        itemName: item.name,
        assignedTo: item.assignedTo,
        status: item.status,
        assigned: item.assigned,
        _id: item._id,
      };
    }

    API.updateListItem(id, listIdToUpdate, item._id, itemData);
  }

  console.log(id);
  console.log(chosenEvent);
  console.log(lists);
  console.log(chosenList);
  return (
    <div className="container">
                  {/* <p className="title"> {chosenEvent.eventName}</p> */}

      
      <div className="column">
        
        <p className="title"> {chosenEvent.eventName}</p>
        <div className="tile is-ancestor columns eventInfo notification">
          
          <div className="column is-parent">
            <article className="is-child">
            <p className="attendeesTitle subtitle">{chosenEventDate} – {chosenEventTime}</p>
            <p className="attendeesTitle subtitle">{chosenEvent.location}</p>
            <p className="attendeesTitle">{chosenEvent.description}</p>
            </article>
          </div>
         
          <div className="column is-parent is-one-fifth">
            <article className="is-child">
              <p className="subtitle attendeesTitle">
                {chosenAttendees.length > 0
                  ? `Attendees(${chosenAttendees.length}):`
                  : `Be the first attendee!`}
              </p>
              {chosenAttendees.length > 0 ? (
                <div className="announcement-content attendee-content">
                  {chosenAttendees.map((attendant) => (
                    <p>{attendant.attendee.username}</p>
                  ))}
                </div>
              ) : (
                ""
              )}
            </article>

          </div>
        </div>
      </div>

      <div className="tile is-ancestor">
        
        
        <div className="tile is-parent">
          <article className="announcementstitle tile blueborder is-child is-scrollable notification is-primary">
            <p className="title">Announcements</p>
            <div className="field has-addons todoInp">
                  <div class="control">
                    <input
                      className="ievent input is-primary"
                      type="text"
                      id="aText"
                      placeholder={`Make an announcement to ${chosenList.listName}...`}
                    ></input>
                  </div>
                  <div className="control">
                    <button
                      className="bt"
                      onClick={(e) => makeAnnouncement(e)}
                    >
                      Announce
                    </button>
                  </div>
                </div>
            <div className="announcement-content">
              <Announcements />
            </div>
          </article>
        </div>

        <div className="tile is-parent">
          <div className="todo tile is-child">
            <article className="todo notification">
              <h1>To Do's:</h1>

              <div className="field has-addons todoInp">
                <div class="control">
                  <input
                    className="ievent input is-primary"
                    type="text"
                    id="todo"
                    placeholder="add a to do...."
                  ></input>
                </div>
                <div className="control">
                  <button className="bt" onClick={saveList}>
                    Add
                  </button>
                </div>
              </div>
              <div className="announcement-content">
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
        </div>

        <div className="todo tile is-parent">
          <article className="tile is-child todo notification">
            {chosenList === "" ? (
              <h4>Choose a to-do list to view!</h4>
            ) : (
              <>
                <h1>{chosenList.listName}</h1>

                <div className="field has-addons todoInp">
                  <div class="control">
                    <input
                      className="ievent input is-primary"
                      type="text"
                      id="todoitem"
                      placeholder={`add to ${chosenList.listName}...`}
                    ></input>
                  </div>
                  <div className="control">
                    <button
                      className="bt"
                      onClick={(e) =>
                        saveListItem(
                          e,
                          chosenListId,
                          chosenList.listName,
                          chosenList
                        )
                      }
                    >
                      submit
                    </button>
                  </div>
                </div>

                {/* <input id="todo" 
                                placeholder={`add to ${chosenList.listName} ...`}>
                            </input>
                            <button onClick={(e) => saveListItem(e, chosenListId, chosenList.listName)}>submit</button> */}
                <div className="announcement-content">
                {chosenListItems.map((item) => (
                  <div className="column listItemCons">
                    <h4>{item.itemName}</h4>
                    {item.assigned ? (
                      <h5>Assigned to {item.assignedTo.username}!</h5>
                      ) : (
                        <>
                        <button
                          className="bt"
                          onClick={(e) =>
                            updateListItem(e, chosenListId, item, "assignment")
                          }
                          >
                          Assign Me!
                        </button>
                      </>
                    )}
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
                ))}
                </div>
              </>
            )}
            {/* <Lists data={testLists} /> */}
          </article>
        </div>
      
      </div>

      <div className="comments column is-scrollable">
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
                        {/* <a onClick={(e) => deleteComment(e, comment._id)}>Delete</a> */}
                      </small>
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="media">
              <div className="commentmedia-content">
                <div className="field">
                  <p className="control">
                    <textarea
                      className="textarea"
                      id="commText"
                      placeholder="Add a comment..."
                    ></textarea>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button className="button" onClick={(e) => makeComment(e)}>Post comment</button>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </article>
      </div>
    
    </div>
  );
}

export default ViewEvent;
