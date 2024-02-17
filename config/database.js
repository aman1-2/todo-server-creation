/*Creating an instance of the mongoose.*/
const mongoose=require('mongoose');

/*This line help you load all your .env data into the process object.*/
require('dotenv').config();

function dbConnect(){
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>(console.log("Made a succesfull connection with the Database.")))
    .catch((error)=>{
        console.log("There is an error in establishing connection with the Database.");
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;