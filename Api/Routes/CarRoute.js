const express=require('express')
const router=express()
const {addCar, getAllCars,updateCar,deleteCar, carDetails}=require('../Controllers/CarController')
const {protectAdmin}=require('../Middleware/AdminMiddleware')
router.post('/',protectAdmin,addCar)
router.get('/',protectAdmin,getAllCars)
router.put('/:car_id',protectAdmin,updateCar)
router.delete('/:car_id',protectAdmin,deleteCar)
router.get('/:car_id',carDetails)
module.exports=router