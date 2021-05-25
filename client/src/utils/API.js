import axios from "axios";

export default {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // getEvents: function(){
  //   return axios.get("/api/events");
  // },
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
