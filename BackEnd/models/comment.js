const moongose = require('mongoose')

const {Schema} = moongose

const commentSchema = new Schema ({
    content : {type : String , required: true} ,
    blog : {type : moongose.SchemaTypes.ObjectId , ref : 'Blog'} ,
    author : {type : moongose.SchemaTypes.ObjectId , ref : 'User'} 
},
    {timestamps : true}
)

module.exports = moongose.model('Comment' , commentSchema , 'comments')