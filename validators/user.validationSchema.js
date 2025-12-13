const z = require("zod")


exports.userBodyschema = z.object({
    userName : z.string(),
    email : z.email(),
    password: z.string().min(6)
})