// establishing a connection to a MongoDB database using the mongoose library in a Node.js application
const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL,{
        // useNewUrlParser: true,
        // useUnifiedTopology:true,
    })
    .then( ()=> console.log("DB connected successfully"))
    .catch( (error) =>{
        console.log("DB connrction Failed");
        console.error(error);
        process.exit(1)
    })
};