import axios from "axios";

const API_URL = "http://localhost:3001";

export default {
  saveUser: function(userData) {
    return axios.post(API_URL + "/api/users", userData);
  },
  checkUser: function(userData){
<<<<<<< HEAD
    return axios.post(API_URL + "/api/users/login", userData)
  },
  createEvent: function(eventData) {
    return axios.post(API_URL + "/api/events", eventData)
  },
  createList: function(listData) {
    return axios.post(API_URL + "/api/events", listData)
  },
  getEvents: function(){
    return axios.get(API_URL + "/api/events");
  },
  getOneEvent: function(id) {
    return axios.get(API_URL + "/api/events/" + id);
  },
  deleteEvent: function(id) {
    return axios.delete(API_URL + "/api/events/" + id);
  },
  deleteList: function (id, listName) {
    return axios.delete(API_URL + "/api/events/" + id + "/list/" + listName)
  },
  removeAttendee: function (id, username) {
    return axios.delete(API_URL + "/api/events/" + id + "/attendee/" + username)
  },
  removeAnnouncement: function (id, announcementid) {
    return axios.delete(API_URL + "/api/events/" + id + "/announcement/" + announcementid)
  },
  getLists: function(event_id){
    return axios.get(API_URL + "/api/lists/" + event_id);
  },
  getActions: function(list_id){
    return axios.get(API_URL + "/api/actions/" + list_id);
  },
  getAnnouncements: function(event_id){
    return axios.get(API_URL + "/api/announcements/" + event_id);
  },
  getAttendees: function(event_id){
    return axios.get(API_URL + "/api/attendees/" + event_id);
  }
};
=======
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
>>>>>>> 211e548a40e1d297400148d3855548c62983e67f
