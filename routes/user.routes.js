const express = require('express');

const router=express.Router();




const{
  createUser,
  get_all_users,
  get_all_usersById,
  updateUserById,

}=require('../controllers/usercontroller');




router.post('/create', createUser),
router.get('/', get_all_users),
router.get('/:id', get_all_usersById),
router.put('/:id', updateUserById),



module.exports = router;
