const mongoose = require("mongoose")
const MusicalInstrumentsSchema = mongoose.Schema({
instrument_name : String,
condition : String,
price: Number
})
module.exports = mongoose.model("MusicalInstruments",
MusicalInstrumentsSchema)

