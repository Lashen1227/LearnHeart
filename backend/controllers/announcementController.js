const Announcement = require('../models/announcementModel');

const createAnnouncement = async (req, res) => {
  try {
    const { name, description, professionalData } = req.body;
    const newAnnouncement = new Announcement({
      name,
      description,
      professionalData,
      orgId: req.user.id, // Assuming user is authenticated
    });

    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().populate('organizationId', 'name');
    res.status(200).json(announcements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const reactToAnnouncement = async (req, res) => {
  try {
    const { announcementId, reaction } = req.body;
    const announcement = await Announcement.findById(announcementId);
    
    if (!announcement) return res.status(404).json({ message: 'Announcement not found' });

    announcement.reactions.push(reaction);
    await announcement.save();

    res.status(200).json(announcement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createAnnouncement, getAnnouncements, reactToAnnouncement };
