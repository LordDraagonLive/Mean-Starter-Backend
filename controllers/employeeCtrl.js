const express = require('express');
var router = express.Router();
//will help us to check if it's a valid mongodb ID
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

//Below router method will get all the employees from the database 

// the app.use() method adds the 
// employees part of the URL => localhost:3000/employees/
router.get('/',(req,res) => {
    Employee.find((err,docs) =>{
        if(!err){res.send(docs);}
        else{console.log('Error in retrieving Employees :   '+JSON.stringify(err,undefined,2));}
    });
});

// employees part of the URL => localhost:3000/employees/:id
//Below get router method will retreive an employee with the specified ID
router.get('/:id',(req,res) =>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    Employee.findById(req.params.id,(err,doc) =>{
        if(!err) { res.send(doc); }
        else { console.log('Error in retrieving Employees :   '+JSON.stringify(err,undefined,2)); }
    });
});

//Below router method allows us to add data(documents) to the database
router.post('/',(req,res) => {
    var emp = new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    });
    emp.save((err,doc) =>{
        if(!err){res.send(doc);}
        else{console.log('Error in saving Employee :   '+JSON.stringify(err,undefined,2));}
    });
});

//Below router method allows us to update data(documents) in the database
router.put('/:id',(req,res) =>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    
    var emp = {
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    };

    Employee.findByIdAndUpdate(req.params.id, { $set:emp }, { new:true },(err,doc)=>{
        if(!err){ res.send(doc); }
        else{console.log('Error in updating Employee :   '+JSON.stringify(err,undefined,2));}
    });
});

//Below router method allows us to delete specific documents from the database
router.delete('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err,doc) => {
        if(!err){ res.send(doc); }
        else{console.log('Error in removing the Employee :   '+JSON.stringify(err,undefined,2));}
    })
})


module.exports = router;