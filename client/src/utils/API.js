import axios from "axios";

export default {
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  checkUser: function(userData){
    return axios.post("/api/users/login", userData)
  },
  hiUser: function(id){
    return axios.get("api/users/" + id)
  },
  byeUser: function(){
    return axios.post("api/users/logout")
  },
  
  getEvents: function(){
    return axios.get("/api/events")
  },
  createEvent: function(eventData) {
    return axios.post("/api/events", eventData)
  },
  getOneEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  updateEvent: function(id, eventData) {
    return axios.put("/api/events/" + id, eventData)
  },
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id)
  },

  createList: function(id, listData) {
    return axios.post("/api/events/" +id+ "/lists/", listData)
  },
  updateList: function (id, list_id, listData) {
    return axios.put("/api/event/" + id + "/lists/" +list_id, listData)
  },
  deleteList: function (id, list_id) {
    return axios.delete("/api/events/" + id + "/lists/" + list_id)
  },
  
  addListItem: function(id, list_id, itemData) {
    return axios.post("/api/events/" + id + "/lists/" + list_id + "/items/", itemData)
  },
  updateListItem: function(id, list_id, item_id, listItemData) {
    return axios.put("/api/events/" + id + "/lists/" + list_id + "/items/" + item_id, listItemData)
  },
  deleteListItem: function(id, list_id, item_id, listItemData) {
    return axios.delete("/api/events/" + id + "/lists/" + list_id + "/items/" + item_id, listItemData)
  },

  
  addComment: function(id, commentData){
    return axios.post("/api/events/" + id + "/comments/", commentData)
  },
  updateComment: function(id, comment_id, commentData){
    return axios.put("/api/events/" + id + "/comments/" + comment_id, commentData)
  },
  deleteComment: function(id, comment_id){
    return axios.delete("/api/events/" + id + "/comments/" + comment_id)
  },

  addAnnouncement: function(id, announcementData){
    return axios.post("/api/events/" +id+ "/announcements/", announcementData)
  },
  updateAnnouncement: function(id, announcement_id, announcementData){
    return axios.put("/api/events/" +id+ "/announcements/" + announcement_id, announcementData)
  },
  deleteAnnouncement: function(id, announcement_id){
    return axios.delete("/api/events/" +id+ "/announcements/" + announcement_id)
  },


  addAttendee: function(id, attendeeData){
    return axios.post("/api/events/" +id+ "/attendees/", attendeeData)
  },
  updateAttendee: function(id, attendee_id, attendeeData){
    return axios.put("/api/events/" +id+ "/attendees/" + attendee_id, attendeeData)
  },
  deleteAttendee: function(id, attendee_id){
    return axios.delete("/api/events/" +id+ "/attendees/" + attendee_id)
  },
  
};
