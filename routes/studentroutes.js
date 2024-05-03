const express = require('express');
const{
    registerUser,
    currentUser,
    loginUser,
}=require('../controllers/studentcontroller');
const validateToken2=require('../middlewares/validateTokenHandler2');
const router=express.Router();
router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/currentuser',validateToken2,currentUser);
module.exports=router;