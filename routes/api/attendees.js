const router = require("express").Router();
const attendeesController = require("../../controllers/attendeesController");

// Matches with "/api/books"
router.route("/")
  .get(attendeesController.findAll)
  .post(attendeesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(attendeesController.findById)
  .put(attendeesController.update)
  .delete(attendeesController.remove);

module.exports = router;
