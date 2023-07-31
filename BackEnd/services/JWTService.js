const jwt = require('jsonwebtoken')
const {ACCESS_TOKEN_SECRET , Refresh_TOKEN_SECRET} = require('../config/index')
const RefreshToken = require('../models/token')

class JWTServices{

    static signAccessToken(payload , expiryTime){
        return jwt.sign(payload ,`ACCESS_TOKEN_SECRET` , { expiresIn : expiryTime});
    }

    static signRefreshToken(payload , expiryTime ){
        return jwt.sign(payload ,`Refresh_TOKEN_SECRET` , { expiresIn : expiryTime});
    }

    static verifyAccessToken(token){
        console.log(token)
        return jwt.verify(token , `ACCESS_TOKEN_SECRET`)
    }

    static verifyRefreshToken(token){
        return jwt.verify(token , `Refresh_TOKEN_SECRET`)
    }

    static async storeRefreshToken(token ,userId){
        try{
            const newToken = new RefreshToken({
                token : token,
                userId : userId
            })

            await newToken.save()
        }
        catch(error){

            console.log(error)

        }
    }


}

module.exports = JWTServices