const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
router.route("/")
  .get(eventsController.findAllEvents)
  .post(eventsController.create);

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

// Matches with "/api/events/:id/list/:listName"
router.route(":id/list/:listName")
  .get(eventsController.findList)
  .put(eventsController.updateList)
  .delete(eventsController.removeList);

// Matches with "/api/events/:id/attendee/:username"
router.route(":id/attendee/:username")
  .get(eventsController.findList)
  .put(eventsController.updateList)
  .delete(eventsController.removeAttendee);

  // Matches with "/api/events/:id/announcement/:announcementid"
router.route(":id/announcement/:annnouncementid")
  .get(eventsController.findList)
  .put(eventsController.updateList)
  .delete(eventsController.deleteAnnouncement);


module.exports = router;
