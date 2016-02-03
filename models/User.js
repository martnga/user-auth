var mongoose =  require('mongoose');
var bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/userauth');
var db = mongoose.connection;

//User schema
var UserSchema = mongoose.Schema({
   username: {
     type: String,
     index: true
   },
  password: {
    type: String, required: true, bcrypt:true
  },
  email: {
    type:String
  },
  name:{
    type: String
  }  
});

 //Make User Object available to other sections of the app
var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
  bcrypt.hash(newUser.password, 13, function(err, hash){
   if(err) throw err;
    
 // set hashed password
  newUser.password = hash;
    
  // Create/save User
  newUser.save(callback);
    });
}