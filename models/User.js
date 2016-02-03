var mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost/userauth');
var db = mongoose.connection;

//User schema
var UserSchema = mongoose.Schema({
   username: {
     type: String,
     index: true
   },
  password: {
    type: String
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
  newUser.save(callback);
}