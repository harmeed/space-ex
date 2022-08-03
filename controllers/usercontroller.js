const User = require("../models/user.model");

exports.createUser = async (req, res) => {
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
    } = req.body;

    const new_User = new User({
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
    });
    const save_new_user = await new_User.save();
    return res.status(200).json(save_new_user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.get_all_users = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      count_user: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("internal error");
  }
};

exports.get_all_usersById = async (req, res) => {
  try {
    const user = await User.findOne({ getById: req.param.id });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json("internal server error");
  }
};



exports.updateUserById = async (req, res) => {
  try {
    const { first_name, last_name, apartments_available } = req.body;
    const update_user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { first_name, last_name, apartments_available },
      { new: true }
    );
    return res.status(200).json(update_user)
  } catch (error) {
    console.log(error);
    return res.status(500).json("internal error");
  }
};
