const mongoose = require('mongoose');

//The 'Employee' model collection data will be automatically converted and will be added to a 'employees' 
//collection in the mongo db. 
var Employee = mongoose.model('Employee',{
    name:{ type: String},
    position: {type: String},
    office: {type: String},
    salary: {type: Number}
});//else we can specify a 3rd param if we want to say specifically the collection name

module.exports = {Employee};