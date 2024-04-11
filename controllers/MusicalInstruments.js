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
    // Handle MusicalInstruments create on POST.
    exports.MusicalInstruments_create_post = async function(req, res) {
    console.log(req.body)
    let document = new MusicalInstruments();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"MusicalInstruments_type":"goat", "cost":12, "size":"large"}
    document.instrument_name = req.body.instrument_name;
    document.condition = req.body.condition;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific MusicalInstruments.
exports.MusicalInstruments_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await MusicalInstruments.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
//Handle MusicalInstruments update form on PUT.
exports.MusicalInstruments_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await MusicalInstruments.findById( req.params.id)
// Do updates of properties
if(req.body.instrument_name)
toUpdate.instrument_name = req.body.instrument_name;
if(req.body.condition) toUpdate.condition = req.body.condition;
if(req.body.price) toUpdate.price = req.body.price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// Handle MusicalInstruments delete on DELETE.
exports.MusicalInstruments_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await MusicalInstruments.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

// Handle a show one view with id specified by query
exports.MusicalInstruments_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await MusicalInstruments.findById( req.query.id)
res.render('MusicalInstrumentsdetail',
{ title: 'MusicalInstruments Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for creating a MusicalInstruments.
// No body, no in path parameter, no query.
// Does not need to be async
exports.MusicalInstruments_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('MusicalInstrumentscreate', { title: 'MusicalInstruments Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a MusicalInstruments.
// query provides the id
exports.MusicalInstruments_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await MusicalInstruments.findById(req.query.id)
res.render('MusicalInstrumentsupdate', { title: 'MusicalInstruments Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
    


