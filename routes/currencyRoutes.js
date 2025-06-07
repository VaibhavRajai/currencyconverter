const express=require('express')
const router=express.Router()
const currencyController=require('../controllers/currencyConverter')

router.post('/convert',currencyController.convert)

module.exports=router