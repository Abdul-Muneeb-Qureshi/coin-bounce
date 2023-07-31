const {ValidationError} = require('joi')


const errorHandler = (error , req , res , next) => {

    let status = 500;
    let data = {
        messgae : 'Internal Server Error'
    }

    if(error instanceof ValidationError){
        status = 401
        data.messgae = error.message
        return res.status(status).json(data)
    }

    if(error.status){
       status = error.status 
    }

    if(error.message){
        data.messgae = error.message 
     }

     return res.status(status).json(data)

}

module.exports = errorHandler