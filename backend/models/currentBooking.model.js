const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//mongo flight model
const Flight = require("./flight.model");

const currentBookingSchema = new Schema({
    flightId: {
        type: Schema.Types.ObjectId,
        ref: `Flight` 
    },
    bookingTime: {
        type: Date,
        default: Date.now(),
    }
});

const CurrentBooking = mongoose.model("CurrentBooking", currentBookingSchema);

module.exports = CurrentBooking ;