const mongoose = require("mongoose");

const dbURI = "mongodb+srv://manojkumaratmakuri:bm2VaKA2OC0FyAr2@flightsdb.xcnwl20.mongodb.net/node-auth" ;
mongoose.connect(dbURI)
    .then(()=>{
        console.log("MongoDB Connected!");
    })
    .catch((err)=>{
        console.log(err);
    })