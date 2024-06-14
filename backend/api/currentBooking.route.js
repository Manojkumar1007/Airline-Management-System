const express = require("express");
const router = express.Router();

//mongo flight and currentBooking models
const Flight = require("../models/flight.model");
const CurrentBooking = require("../models/currentBooking.model");

//Route to get current bookings with flight details
router.get("/current-bookings", async (req,res) => {
    try {
        const bookings = await CurrentBooking.find().populate("flightId");
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//create new booking
router.post("/book-flight", async (req,res) => {
    const { flightId } = req.body;
    try {
        
        //Find the flight by its Id
        const flight = await Flight.findById(flightId);

        if(!flight) {
            res.status(404).json({message: "Flight not found "});
        }else{
            // Create a new booking 
            const booking =  new CurrentBooking({
                flightId: flight._id,
                bookingTime: new Date(),
            });

            // Save the booking 
            await booking.save();

            res.status(201).json({message: "Flight booked successfully", booking});
        }

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;