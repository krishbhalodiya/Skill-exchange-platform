
const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// Endpoint to post a new skill
router.post('/addSkill', async (req, res) => {
    const { userId, skillName, skillLevel, availability } = req.body;
    try {
        const newSkill = new Skill({ userId, skillName, skillLevel, availability });
        await newSkill.save();
        res.status(201).json({ message: 'Skill added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add skill' });
    }
});

module.exports = router;
