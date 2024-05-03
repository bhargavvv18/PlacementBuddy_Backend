const express = require('express');
const{
    registerUser,
    currentUser,
    loginUser,
}=require('../controllers/userscontrollers');
const validateToken=require('../middlewares/validateTokenHandler');
const router=express.Router();
router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/currentuser',validateToken,currentUser);
module.exports=router;