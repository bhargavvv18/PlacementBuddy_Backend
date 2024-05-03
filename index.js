const express=require('express');
const connectDB=require('./config/dbConnection');
const errorHandler=require('./middlewares/errorHandler');
const dotenv=require('dotenv').config();
const cors = require('cors');
connectDB();
const port=process.env.PORT || 3000;
const app=express();
app.use(express.json());
app.use(cors());
app.use('/api/users',require('./routes/usersroutes'));
app.use('/api/students',require('./routes/studentroutes'))
app.use('/api/companies',require('./routes/companiesroutes'));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
