import axios from "axios";

const API_URL = "http://localhost:3001";

export default {
  saveUser: function(userData) {
    return axios.post(API_URL + "/api/users", userData);
  },
  checkUser: function(userData){
    return axios.post("/api/users/login", userData)
  },
  createEvent: function(eventData) {
    return axios.post("/api/events", eventData)
  },
  createList: function(listData) {
    return axios.post("api/events", listData)
  },
  getEvents: function(){
    return axios.get("/api/events");
  },
  getOneEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  deleteList: function (id, listName) {
    return axios.delete("api/events/" + id + "/list/" + listName)
  },
  removeAttendee: function (id, username) {
    return axios.delete("api/events/" + id + "/attendee/" + username)
  },
  removeAnnouncement: function (id, announcementid) {
    return axios.delete("api/events/" + id + "/announcement/" + announcementid)
  }
  // getLists: function(){
  //   return axios.get("/api/lists/" + event_id);
  // },
  // getActions: function(){
  //   return axios.get("/api/actions/" + list_id);
  // },
  // getAnnouncements: function(){
  //   return axios.get("/api/announcements/" + event_id);
  // },
  // getAttendees: function(){
  //   return axios.get("/api/attendees/" + event_id);
  // }
};
