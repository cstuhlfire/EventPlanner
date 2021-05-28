const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
router.route("/")
  .get(eventsController.findAllEvents)
  .post(eventsController.createEvent);

// Matches with "/api/events/:id"
router.route("/:id")
  .get(eventsController.findEventById)
  .put(eventsController.updateEvent)
  .delete(eventsController.deleteEvent);

  // Matches with "/api/events/:id/lists/"
router.route("/:id/lists/")
  .post(eventsController.addList)
// Matches with "/api/events/:id/lists/:list_id"
router.route("/:id/lists/:list_id")
  .put(eventsController.updateList)
  .delete(eventsController.removeList);

// Matches with "/api/events/:id/lists/:listName/items/"
router.route("/:id/lists/:list_id/items/")
  .post(eventsController.addListItem)
// Matches with "/api/events/:id/lists/:list_id/items/:item_id"
router.route("/:id/lists/:list_id/items/:item_id")
  .put(eventsController.updateListItem)
  .delete(eventsController.removeListItem)

// Matches with "/api/events/:id/comments/"
router.route("/:id/comments/")
  .post(eventsController.addComment)
// Matches with "/api/events/:id/comments/:comment_id"
router.route("/:id/comments/:comment_id")
  .put(eventsController.updateComment)
  .delete(eventsController.deleteComment)

// Matches with "/api/events/:id/announcement/"
router.route("/:id/announcements/")
  .post(eventsController.addAnnouncement)
// Matches with "/api/events/:id/announcements/:announcement_id"
router.route("/:id/announcements/:announcement_id")
  .put(eventsController.updateAnnouncement)
  .delete(eventsController.deleteAnnouncement)

// Matches with "/api/events/:id/attendees/"
router.route("/:id/attendees/")
  .post(eventsController.addAttendee)
// Matches with "/api/events/:id/attendees/:attendee_id"
router.route("/:id/attendees/:attendee_id")
  .put(eventsController.updateAttendee)
  .delete(eventsController.deleteAttendee);

module.exports = router;
