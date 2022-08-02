var express = require('express');
const House = require('../models/house');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create',async(req,res)=>{
  const {price,isBooked,address,propertyName}=req.body
  const house = await House.create({
    price,isBooked,address,propertyName
  })
  return res.status(201).json(house)
})
module.exports = router;
