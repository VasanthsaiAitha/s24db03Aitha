var express = require('express');
var router = express.Router();
var passport = require('passport');

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

// router.put('/',function(req, req){
// if(req.body.checkboxsale) toUpdate.sale = true;
// else toUpdate.same = false;})
/* GET create update page */
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
  }
/* GET detail MusicalInstruments page */
router.get('/detail',secured, MusicalInstruments_controllers.MusicalInstruments_view_one_Page);
/* GET create MusicalInstruments page */
router.get('/create', MusicalInstruments_controllers.MusicalInstruments_create_Page);
router.get('/update',secured, MusicalInstruments_controllers.MusicalInstruments_update_Page);
/* GET delete MusicalInstruments page */
router.get('/delete',secured, MusicalInstruments_controllers.MusicalInstruments_delete_Page);
// A little function to check if we have an authorized user and continue on or
// redirect to login.
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
  });
  
module.exports = router;