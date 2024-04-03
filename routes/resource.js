var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var MusicalInstruments_controller = require('../controllers/MusicalInstruments');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// MusicalInstruments ROUTES ///
// POST request for creating a MusicalInstruments.
router.post('/MusicalInstruments', MusicalInstruments_controller.MusicalInstruments_create_post);
// DELETE request to delete MusicalInstruments.
router.delete('/MusicalInstruments/:id', MusicalInstruments_controller.MusicalInstruments_delete);
// PUT request to update MusicalInstruments.
router.put('/MusicalInstruments/:id', MusicalInstruments_controller.MusicalInstruments_update_put);
// GET request for one MusicalInstruments.
router.get('/MusicalInstruments/:id', MusicalInstruments_controller.MusicalInstruments_detail);
// GET request for list of all MusicalInstruments items.
router.get('/MusicalInstruments', MusicalInstruments_controller.MusicalInstruments_list);
module.exports = router;