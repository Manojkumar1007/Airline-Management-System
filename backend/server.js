//mongodb
require("./config/db");

const express = require("express");
const port = process.env.PORT || 3000;

//cors
const cors = require("cors");

const bodyParser = require("express").json;

const userRouter = require("./api/user.route");
const FlightRouter = require("./api/flight.route");
const AdminRouter = require("./api/admin.route");
const currentBookingRouter = require("./api/currentBooking.route");
const emailRouter = require("./api/email.route");

//cron for updating the pastFlights collection
const cron = require("node-cron");
const movePastFlights = require("./functions/movePastFlights");

const app = express();
app.use(cors());
app.use(bodyParser());
app.use(express.urlencoded({extended:true}));

app.use("/user", userRouter);
app.use("/admin", FlightRouter);
app.use("/admin", AdminRouter);
app.use(currentBookingRouter);
app.use(emailRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello from Airline-Management-System</h1>");
});

cron.schedule('0 * * * *', () => {
  console.log("Running movePastFlights job...");
  movePastFlights();
})
