import Util from '../utils/Util';

const util = new Util();
class viewController{
    
    static async getMainView(req,res){
        try {
            return res.render('index', {Context1:"value1"});
        } catch (error) {
            util.setError(400,error.message);
            return util.send(res);
        }
        
        
    }
}
export default viewController;