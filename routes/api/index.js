const router = require("express").Router();
const bookRoutes = require("./books");
const eventRoutes = require("./events");
const userRoutes = require("./users");

// Book routes
router.use("/books", bookRoutes);
router.use("/events", eventRoutes);
router.use("/users", userRoutes);

module.exports = router;
