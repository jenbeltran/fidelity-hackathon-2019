//strict mode
'use strict';

//Adding Express
let express = require('express');

// Create instance of an express router
let router = express.Router();

/**
 * Define routes
 */

//Overview Page
router.get('/', (req, res, next) => {
	res.render('landingPage');
});

module.exports = router;
