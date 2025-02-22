const Event = require("../models/eventModel");

// Get all events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: "Error fetching events", error });
    }
};

// Get single event
const getEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: "Error fetching event", error });
    }
};

// Create event
const createEvent = async (req, res) => {
    try {
        const { schoolName, location, grade, subject, date } = req.body;
        const images = req.files ? req.files.map((file) => `/uploads/${file.filename}`) : [];

        const newEvent = new Event({ schoolName, location, grade, subject, date, images });
        await newEvent.save();

        res.status(201).json({ message: "Event shared successfully!", newEvent });
    } catch (error) {
        res.status(500).json({ message: "Error adding event", error });
    }
};

// Delete event
const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });

        res.status(200).json({ message: "Event deleted successfully", event });
    } catch (error) {
        res.status(500).json({ message: "Error deleting event", error });
    }
};

// Update event
const updateEvent = async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEvent) return res.status(404).json({ message: "Event not found" });

        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: "Error updating event", error });
    }
};

// Add rating
const addRating = async (req, res) => {
    try {
        const { rating } = req.body;
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });

        event.ratings.push(rating);
        await event.save();

        res.json({ message: "Rating added successfully", event });
    } catch (error) {
        res.status(500).json({ message: "Error adding rating", error });
    }
};

// Add comment
const addComment = async (req, res) => {
    try {
        const { userId, username, text, profilePic } = req.body;
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });

        event.comments.push({ userId, username: username || "Unknown User", text, profilePic });
        await event.save();

        res.json({ message: "Comment added successfully", event });
    } catch (error) {
        res.status(500).json({ message: "Error adding comment", error });
    }
};

// Fetch comments
const getComments = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });

        res.json(event.comments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching comments", error });
    }
};

module.exports = {
    getAllEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent,
    addRating,
    addComment,
    getComments
};
