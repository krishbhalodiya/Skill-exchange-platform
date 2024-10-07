
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Endpoint for matching users based on skills
router.post('/match', async (req, res) => {
    const { skillNeeded } = req.body;
    try {
        const matchedUsers = await User.find({ skills: skillNeeded });
        res.json(matchedUsers);
    } catch (error) {
        res.status(500).json({ error: 'Skill matching failed' });
    }
});

module.exports = router;
