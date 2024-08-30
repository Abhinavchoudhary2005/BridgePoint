const express = require('express');
const { hostEvent, getAllEvents } = require('../controller/event');  // Destructure to match export
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/host', upload.single('thumbnail'), hostEvent);
router.get('/showEvents', getAllEvents)

module.exports = router;
