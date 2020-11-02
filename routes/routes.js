const express = require('express');
const router = express.Router();
const gigRoutes = require('./gigs.route');

router.use('/gigs', gigRoutes);
module.exports = router;