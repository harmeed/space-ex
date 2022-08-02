const express = require('express');

const User = require('../models/user.model');



const{
  userSchema,
  get_all_users,
  updateByID,
}=require('../controllers/usercontroller');
const router=express.Router();



router.post('/create', userSchema),
router.get('/users', get_all_users),
router.get('/user/:id', get_all_users),
router.put('/user/:id', updateByID),



module.exports = router;
