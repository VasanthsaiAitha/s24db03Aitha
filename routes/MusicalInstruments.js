var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('MusicalInstruments', { title: 'Search Result MusicalInstruments' });
});

module.exports = router;

var express = require('express');
const MusicalInstruments_controllers= require('../controllers/MusicalInstruments');
var router = express.Router();
/* GET MusicalInstruments */
router.get('/', MusicalInstruments_controllers.MusicalInstruments_view_all_Page );

// GET request for one MusicalInstruments.
router.get('/MusicalInstruments/:id', MusicalInstruments_controllers.MusicalInstruments_detail);

router.put('/',function(req, req){
if(req.body.checkboxsale) toUpdate.sale = true;
else toUpdate.same = false;})

/* GET detail MusicalInstruments page */
router.get('/detail', MusicalInstruments_controllers.MusicalInstruments_view_one_Page);
/* GET create MusicalInstruments page */
router.get('/create', MusicalInstruments_controllers.MusicalInstruments_create_Page);
module.exports = router;