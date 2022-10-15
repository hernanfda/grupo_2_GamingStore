const express = require('express');
const router = express.Router();
const usersApiControllers = require('../../controllers/api/usersApiControllers')
const multer = require('../../middlewares/multer');

//get list users
router.get('/', usersApiControllers.userList)
//get details of each user
router.get("/details/:id", usersApiControllers.userDetail);
//register user  
router.post("/register", multer.single('userAvatar'), usersApiControllers.processRegister);
//login an user with api access
router.post("/login", usersApiControllers.processLogin);
//get tha last user in DB
router.get('/lastone', usersApiControllers.lastOneInDb);


module.exports = router;