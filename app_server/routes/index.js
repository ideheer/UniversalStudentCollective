var express = require('express');
var router = express.Router();
var ctrlServices = require('../controllers/services');

/* Locations pages */
router.get('/', ctrlServices.login);
router.get('/main', ctrlServices.main);

//get pets
router.get('/pets', ctrlServices.pets); 

//get rides
router.get('/rides', ctrlServices.rides);

//get goods
router.get('/goods', ctrlServices.goods);

//get providers
router.get('/providers', ctrlServices.homelist);

 
module.exports = router;
