const cors = require("cors");
const express=require('express');
const app=express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
const employeeRoutes=require('./routes/employeeRoutes');
app.use('/employees',employeeRoutes);
app.get('/',(req,res)=>{
    res.send('Employee management API is running');
});
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});