import database from '../../models';

class userServices{
    static async createNewUser(newUser){
        try {
            const newUser_ = await database.users.create(newUser);
            if(newUser_){
                return newUser_;
            }
            return null;
        
        } catch (error) {
            throw error;
        }
    }
}
export default userServices;