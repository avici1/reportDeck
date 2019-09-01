import decisionService from '../services/decisionServices';
import Util from '../utils/Util';

const util = new Util();

class decisionsController {
    static async getOne(req, res) {
        const {
            id
        } = req.params;
        try {

            const one = await decisionService.getOne(id);
            if (Object.values(one).length >= 1) {
                util.setSuccess("Found", 200, one);
                return util.send(res);
            } else {
                util.setError(400, "A problem occured");
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, "A problem occured " + error.message + ' - ' + id);
            return util.send(res);
        }
    }
    //0732235001
    static async getAll(req, res) {
        try {
            const list = await decisionService.get_defined_decision();
            if (Object.values(list).length >= 1) {
                util.setSuccess("Found ", 200, list);
                return util.send(res);
            } else {
                util.setError(400, "A problem occured can't find list of decisions");
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, "an error occured " + error.message);
            return util.send(res);
        }
    }
    static async get_specific_decisions(req, res) {
        try {
            const decisions = await decisionService.get_defined_decisions();
            if (Object.values(decisions).length >= 1) {
                util.setSuccess(" Found decisions", 200, decisions);
                return util.send(res);
            } else {
                util.setError(" decisions weren't found at all ");
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, `an error occured  ${error.message}`);
            return util.send(res);
        }
    }
    static async adder(req, res) {
        try {
            const data = req.body;
            if ((Object.values(data).length < 3) == false) {
                const added = await decisionService.addNew(data);
                util.setSuccess("Added successfully", 200, added);
                return util.send(res);
            } else {
                util.setError(400, "can't add some missing fields");
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, "an error occured " + error.message);
            return util.send(res);
        }
    }
    static async udpdate(req, res) {
        try {
            const {
                id
            } = req.params;
            const data = req.body;
            if (Object.values(data).length >= 1) {
                const updated = await decisionService.updater(id, data);
                util.setSuccess("Updated successfully", 200, updated);
                return util.send(res);
            } else {
                util.setError(400, "C'mon you got to atleast update one");
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, "An error occured " + error.message);
            return util.send(res);
        }
    }
    static async delete(req, res) {
        try {
            const {
                id
            } = req.params;
            const deleted = await decisionService.deleter(id);
            if (deleted) {
                util.setSuccess("Deleted successfully", 200, deleted);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, "An error occured " + error.message);
            return util.send(res);
        }
    }
}
export default decisionsController;