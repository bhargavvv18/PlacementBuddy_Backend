const express=require('express');
const router=express.Router();
const {
    getCompanies,
    getCompany,
    createCompany,
    updateCompany,
    deleteCompany,
}=require('../controllers/companiescontrollers');
const validateToken=require('../middlewares/validateTokenHandler');

// const validateToken2=require('../middlewares/validateTokenHandler2');
router.route('/').get(getCompanies).post(validateToken, createCompany);
router.route('/:id').get(getCompany).put(validateToken, updateCompany).delete(validateToken, deleteCompany);
module.exports=router;