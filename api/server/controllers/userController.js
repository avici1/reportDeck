import bcrypt from 'bcryptjs';
import Util from '../utils/Util';
import userService from '../services/userServices';

const util = new Util();

class UserController{
    static async createUser(req,res){
        var hashed = '';
        try {
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(req.body.password,salt,(err,hashed)=>{
                    req.body.password = hashed
                });
            });
            const securedUser = {
                accessLevel:req.body.accessLevel,
                username:req.body.username,
                password:hashed
            }
            const newUser = await userService.createNewUser(securedUser);
            if(Object.values(newUser).length >=1){
                util.setSuccess("User Added successfully",200,securedUser);
                return util.send(res);
            }else{
                util.setError(400,"Couldn't add user");
                return util.send(res);
            }
        } catch (error) {
            util.setError(400,"A problem occured >> " +error.message);
                return util.send(res);
        }
    }
}
export default UserController;