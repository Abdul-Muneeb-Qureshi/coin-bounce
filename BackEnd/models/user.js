const moongose = require('mongoose')

const {Schema} = moongose

const userSchema = new Schema ({
    name : {type : String , required: true} ,
    username : {type : String , required: true} ,
    email : {type : String , required: true} ,
    password : {type : String , ref : 'User'}
},
    {timestamps : true}
)

module.exports = moongose.model('User' , userSchema , 'users')