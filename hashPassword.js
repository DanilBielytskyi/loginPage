import bcrypt from "bcrypt"

export  async function hashPassword(user){
    let salt = await bcrypt.genSalt(7);
    user.password = await bcrypt.hash(user.password, salt)
}
