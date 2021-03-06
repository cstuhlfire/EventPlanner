const router = require("express").Router();
const bookRoutes = require("./books");
const eventRoutes = require("./events");
const userRoutes = require("./users");
const actionRoutes = require("./actions");
const listRoutes = require("./lists");
const announcementRoutes = require("./announcements");
const attendeeRoutes = require("./attendees");

// Book routes
// router.use("/books", bookRoutes);
router.use("/events", eventRoutes);
router.use("/users", userRoutes);
// router.use("/actions", actionRoutes);
// router.use("/lists", listRoutes);
// router.use("/annoucements", announcementRoutes);
// router.use("/attendees", attendeeRoutes);

module.exports = router;
