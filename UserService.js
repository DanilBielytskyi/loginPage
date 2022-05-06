import User from "./User.js";

class UserService {

    async create(userInfo){
        const createdUser = await User.create(userInfo)
        return createdUser;
    }

    async read(userInfo){}

    async update(userInfo){}

    async delete(userId){}

}

export default new UserService();