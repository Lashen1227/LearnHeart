const express = require("express");
const {
    getAllEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent,
    addRating,
    addComment,
    getComments
} = require("../controllers/eventController");
const multer = require("multer");

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Event Routes
router.get("/", getAllEvents);
router.get("/:id", getEvent);
router.post("/add", upload.array("images", 3), createEvent);
router.delete("/:id", deleteEvent);
router.patch("/:id", updateEvent);
router.post("/rate/:id", addRating);
router.post("/comment/:id", addComment);
router.get("/comments/:id", getComments);

module.exports = router;
