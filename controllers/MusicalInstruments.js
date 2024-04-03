var MusicalInstruments = require('../model/MusicalInstruments');
// List of all MusicalInstruments
exports.MusicalInstruments_list = function(req, res) {
res.send('NOT IMPLEMENTED: MusicalInstruments list');
};
// for a specific MusicalInstruments.
exports.MusicalInstruments_detail = function(req, res) {
res.send('NOT IMPLEMENTED: MusicalInstruments detail: ' + req.params.id);
};
// Handle MusicalInstruments create on POST.
exports.MusicalInstruments_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: MusicalInstruments create POST');
};
// Handle  MusicalInstruments delete from on DELETE.
exports.MusicalInstruments_delete = function(req, res) {
res.send('NOT IMPLEMENTED: MusicalInstruments delete DELETE ' + req.params.id);
};
// Handle MusicalInstruments update form on PUT.
exports.MusicalInstruments_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: MusicalInstruments update PUT' + req.params.id);
};

// List of all MusicalInstruments
exports.MusicalInstruments_list = async function(req, res) {
    try{
    theMusicalInstruments = await MusicalInstruments.find();
    res.send(theMusicalInstruments);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// VIEWS
// Handle a show all view
exports.MusicalInstruments_view_all_Page = async function(req, res) {
    try{
    theMusicalInstruments = await MusicalInstruments.find();
    res.render('MusicalInstruments', { title: 'MusicalInstruments Search Results', results: theMusicalInstruments });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    