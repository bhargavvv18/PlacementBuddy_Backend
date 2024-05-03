const Company = require('../models/companiesModel');
const asyncHandler = require('express-async-handler');

// @desc    Fetch all companies
// @route   GET /api/companies
// @access  Public
const getCompanies = asyncHandler(async (req, res) => {
    const companies = await Company.find({});
    res.json(companies);
});

// @desc    Fetch single company
// @route   GET /api/companies/:id
// @access  Public
const getCompany = asyncHandler(async (req, res) => {
    const company = await Company.findById(req.params.id);
    if (company) {
        res.json(company);
    }
    else {
        res.status(404);
        throw new Error('Company not found');
    }
});

// @desc    Create a company
// @route   POST /api/companies
// @access  Private/Admin
const createCompany = asyncHandler(async (req, res) => {
    const {year,status,title,cgpa,package,intership,EligibleBranches,OfferedStudents,JobLocation,JobProfile,JobDescription,process,companyWebsite,archiveslink} = req.body;
    if(!year || !status || !title || !cgpa || !package || !intership || !EligibleBranches || !OfferedStudents || !JobLocation || !JobProfile || !JobDescription || !process || !companyWebsite || !archiveslink){
        res.status(400);
        throw new Error('Please Fill all the fields');
    }
    const company = new Company({
        year,
        status,
        title,
        cgpa,
        package,
        intership,
        EligibleBranches,
        OfferedStudents,
        JobLocation,
        JobProfile,
        JobDescription,
        process,
        companyWebsite,
        archiveslink,
        user_id: req.user._id,
    });
    const createdCompany = await company.save();
    res.status(201).json(createdCompany);
});

// @desc    Update a company
// @route   PUT /api/companies/:id
// @access  Private/Admin
const updateCompany = asyncHandler(async (req, res) => {
    const {year,status,title,cgpa,package,intership,EligibleBranches,OfferedStudents,JobLocation,JobProfile,JobDescription,process,companyWebsite,archiveslink} = req.body;
    const company = await Company.findById(req.params.id);
    if (company) {
        company.year = year;
        company.status = status;
        company.title = title;
        company.cgpa = cgpa;
        company.package = package;
        company.intership = intership;
        company.EligibleBranches = EligibleBranches;
        company.OfferedStudents = OfferedStudents;
        company.JobLocation = JobLocation;
        company.JobProfile = JobProfile;
        company.JobDescription = JobDescription;
        company.process = process;
        company.companyWebsite = companyWebsite;
        company.archiveslink = archiveslink;
        const updatedCompany = await company.save();
        res.json(updatedCompany);
    }
    else {
        res.status(404);
        throw new Error('Company not found');
    }
});

// @desc    Delete a company
// @route   DELETE /api/companies/:id
// @access  Private/Admin
const deleteCompany = asyncHandler(async (req, res) => {
    const company = await Company.findById(req.params.id);
    if (company) {
        await Company.findByIdAndRemove(req.params.id);
        res.json({ message: 'Company removed' });
    }
    else {
        res.status(404);
        throw new Error('Company not found');
    }
});

module.exports = {
    getCompanies,
    getCompany,
    createCompany,
    updateCompany,
    deleteCompany,
};