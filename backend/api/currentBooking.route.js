const express = require("express");
const router = express.Router();

//mongo flight and currentBooking models
const Flight = require("../models/flight.model");
const CurrentBooking = require("../models/currentBooking.model");

// Function to generate a random PNR
const generatePNR = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let pnr = '';
    for(let i=0; i<6 ; i++){
        pnr += chars[Math.floor(Math.random()*chars.length)];
    }
    return pnr;
}

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
    const { flightId, traveller, selectedSeat } = req.body;
    try {
        
        //Find the flight by its Id
        const flight = await Flight.findById(flightId);

        if(!flight) {
            res.status(404).json({message: "Flight not found "});
        }else{
            //Generate a unique PNR
            const pnr = generatePNR();

            // Create a new booking 
            const booking =  new CurrentBooking({
                flightId: flight._id,
                bookingTime: new Date(),
                traveller: traveller,
                pnr: pnr,
                selectedSeat: selectedSeat,
            });

            // Save the booking 
            await booking.save();

            res.status(201).json({message: "Flight booked successfully", booking});
        }

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// to fetch booking details by PNR and last name
router.post("/checkin-details", async(req,res) => {
    const { pnr, lastName } = req.body;

    console.log('Received PNR:', pnr);
    console.log('Received lastName:', lastName);

    try {
        const booking = await CurrentBooking.findOne({ pnr: pnr }).populate('flightId').populate('traveller');
        
        if( !booking ) {
            console.error('Booking not found for PNR:', pnr);
            return res.status(404).json({message: "Booking not found"});
        }
        if(booking.traveller.lastName !== lastName) {
            return res.status(400).json({ message: "Last name does not match" });
        }

        res.status(200).json(booking);

    } catch (error) {
        console.error('Error fetching booking:', error);
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;