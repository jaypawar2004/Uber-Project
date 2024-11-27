const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
fullname:{
    firstname:{
        type : String,
        required : true,
        minlenght:[3,'First name must be at least 3 charcters long'],
        
    },
    lastname:{
        type : String,
        minlenght:[3,'First name must be at least 3 charcters long'],

    }
},
email:{
    type : String,
    required : true,
    minlenght:[5,'First name must be at least 5 charcters long'],
    
},

password:{
    type : String,
    required : true,
    select: false
},
socketId:{
    type: String
}

})

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET)
return token;

} 
userSchema.methods.comparedPassword = async function (password){
return await bcrypt.compare(password, this.password);

} 
userSchema.statics.hashPassword = async function (password){
return await bcrypt.hash(password, 10);

} 

const userModel = mongoose.model('user', userSchema);


module.exports = userModel;
