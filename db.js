const mongoose = require('mongoose');
// had to change 'localhost' to '127.0.0.1' because there is a windows OS conflict with mongoose
mongoose.connect('mongodb://127.0.0.1:27017/CrudDB_Angular', (err) => {
    if(!err){
        console.log('MongoDB connection successful...!');
    }else{
        console.log('MongoDB connection failed ! : '+JSON.stringify(err,undefined,2));
    }
});

module.exports = mongoose;