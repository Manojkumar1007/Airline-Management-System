const CurrentBooking = require("../models/currentBooking.model");
const PastFlight = require("../models/pastFlights.model");

const movePastFlights = async () => {
    const now = new Date();
    try {

        //Find bookings where the flight's departure time is in the past
        const pastBookings = await CurrentBooking.find().populate(`flightId`);
        const bookingsToMove = pastBookings.filter(booking => new Date(booking.flightId.departureTime) < now);

        // Move each past booking to the pastFlights collection 
        for(const booking of bookingsToMove){
            const pastFlight = new PastFlight({
                flightId: booking.flightId._id,
                bookingTime: booking.bookingTime,
                travelDate: booking.flightId.endTime,
            });

            await pastFlight.save();
            await CurrentBooking.findByIdAndDelete(booking._id);
        }

        console.log(`${bookingsToMove.length} bookings moved to past flihts`);

    } catch (error) {
        console.log();
    }
};

module.exports = movePastFlights;