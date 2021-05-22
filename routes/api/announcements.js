const router = require("express").Router();
const announcementsController = require("../../controllers/announcementsController");

// Matches with "/api/actions"
router.route("/")
  .get(announcementsController.findAll)
  .post(announcementsController.create);

// Matches with "/api/actions/:id"
router
  .route("/:id")
  .get(announcementsController.findById)
  .put(announcementsController.update)
  .delete(announcementsController.remove);

module.exports = router;
