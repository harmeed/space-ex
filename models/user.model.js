const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
   first_name : String,
   last_name : String,
   phone_number : String,
   email: String,
   password: String,
   apartments_available : String,
   arrival_date: String,
   departure_date: String,
   number_of_guests: Number,
   number_of_nights: Number,
   isBooked:{
        type:Boolean,
        default:false,
    },

    role:{
        type:String,
        enum:['admin','user']
    },
 isLoggedIn:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('User',userSchema);