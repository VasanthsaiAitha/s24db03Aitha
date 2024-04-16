const mongoose = require("mongoose")
const MusicalInstrumentsSchema = mongoose.Schema({
instrument_name : {
  type:String,
  minlength:[0],
  maxlength:[20]
},
condition : String,
price: {
    type: Number,
    min: [0],
    max: [10000]
  }
})
module.exports = mongoose.model("MusicalInstruments",
MusicalInstrumentsSchema)

