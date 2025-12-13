const {userBodyschema} = require("../validators/user.validationSchema")

exports.createValidationMiddleware = (req, res, next)=>{
try{
    userBodyschema.parse(req.body)
    next()
}catch (error){
    return res.status(400).json({error: error})
}
}