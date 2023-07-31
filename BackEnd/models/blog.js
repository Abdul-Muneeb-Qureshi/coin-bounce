const moongose = require('mongoose')

const {Schema} = moongose

const blogSchema = new Schema ({
    title : {type : String , required: true} ,
    content : {type : String , required: true} ,
    photoPath : {type : String , required: true} ,
    author : {type : moongose.SchemaTypes.ObjectId , ref : 'User'}
},
    {timestamps : true}
)

module.exports = moongose.model('Blog' , blogSchema , 'blogs')