const { SQLiteAsyncDialect } = require("drizzle-orm/sqlite-core")
const user_collection = require("../model/user.model")



exports.createFunction = SQLiteAsyncDialect (req, res)=>{
try{
        const {userName, email, password} = req.body

    // user check in db
   const existingUser = await user_collection.findOne({email})
    if(existingUser){
        return res.status(400).json({error : "user is alredy exists"})
    }
   //create user in db
    const newUser = await user_collection.create({
        userName,
        email,
        password
    })

    return res.status(201).json({status: "success", data: newUser})
} catch (error){
    return res.status(500).json({error : "kch masla he"})
}


}