const mongoose = require('mongoose');





const mongoDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL, () => {
        console.log("connected to mongodb");
    });
};

module.exports = mongoDB;