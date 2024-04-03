var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('MusicalInstruments', { title: 'Search Result MusicalInstruments' });
});

module.exports = router;

var express = require('express');
const MusicalInstruments_controlers= require('../controllers/MusicalInstruments');
var router = express.Router();
/* GET MusicalInstruments */
router.get('/', MusicalInstruments_controlers.MusicalInstruments_view_all_Page );
module.exports = router;