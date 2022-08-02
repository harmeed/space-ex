const User = require('../models/user.model');



exports.userSchema = async (req, res)=> {
    try {
        const {
            first_name,
            last_name,
            phone_number,
            email,
            password,
            number_of_guests,
            apartments_available,
            arrival_date,
            departure_date,
            number_of_nights,
            isBooked,
             } = req.body
             const new_user = new User({
                first_name,
                last_name,
                phone_number,
                email,
                password,
                number_of_guests,
                apartments_available,
                arrival_date,
                departure_date,
                number_of_nights,
                isBooked,
            });
            const save_new_user = await new_user.save();
            return res.status(200).json(save_new_user);
    } catch (error) { 
        console.log(error);
        return res.status(500).json({ message: error.message });
    } 
};




exports.get_all_users = async(req, res) =>{
    try {
        const users = await User.find({});
        return res.status(200).json({
            count_user: users.length,
            users});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};






exports.getsbyID = async(req, res) =>{
    try {
        const users = await User.find({getsbyID:req.params.id});
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};  


exports.updateByID = async (req, res) => {
    try {
        const { first_name, last_name,apartments_available} = req.body
        const user = await User.findByIdAndUpdate({ id: req.params.id},
            {first_name, last_name, apartments_available},
            {new: true},
            );

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};






