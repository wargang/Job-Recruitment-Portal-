const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codecial_devlopment_26');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error in connection gto mongodb"));
db.once('open',function(){
    console.log('Connected to database::MongoDB');
});
module.exports=db;