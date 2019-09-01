import ctService from '../services/courseTeacherService';
import Util from '../utils/Util';

const util = new Util();

class courseTeacherController {
    static async getOne(req, res) {
        const {
            id
        } = req.params;
        try {
            
            const one = await ctService.getOne_(id);
            if (Object.values(one).length >= 1) {
                util.setSuccess("Found", 200, one);
                return util.send(res);
            } else {
                util.setError(400, "Can't find what You are looking for");
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, `A problem occured >> ${error.message}`);
            return util.send(res);
        }
    }
    static async getAll(req, res) {
        try {
            const list = await ctService.getAll();
            if (Object.values(list).length >= 1) {
                util.setSuccess("Found ", 200, list);
                return util.send(res);
            } else {
                util.setError(400, "A problem occured can't find any data");
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, "an error occured " + error.message);
            return util.send(res);
        }
    }
    static async adder(req, res) {
        try {
            const data = req.body;
            const date = new Date();
            const teacherId_ = req.body.teachername.slice(0,3) + '-'+Math.floor((Math.random() * 100)) + '-' +date.getFullYear();
            const courseId_ = req.body.courseName.slice(0,3) + '-'+ Math.floor((Math.random() * 100)) + '-' +date.getFullYear();
            const dataToadd = {
                "teachername":req.body.teachername,
                "teacherId":teacherId_,
                "courseName":req.body.courseName,
                "courseId":courseId_,
                "classId":req.body.classId
            };
            if ((Object.values(data).length < 3) == false) {
                const added = await ctService.addNew(dataToadd);
                util.setSuccess("Added successfully", 200, added);
                return util.send(res);
            } else {
                util.setError(400, "can't add");
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, "an error occured " + error.message);
            return util.send(res);
        }
    }
    static async udpdate(req, res) {
        try {
            const {id} = req.params;
            const data = req.body;
            if (Object.values(data).length >= 1) {
                const updated = await ctService.updater(id, data);
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
            const {id} = req.params;
            const deleted = await ctService.deleter(id);
            if (deleted) {
                util.setSuccess("Deleted successfully", 200, deleted);
                return util.send(res);
            }else{
                util.setError(400,"Can't delete may be it's already gone");
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, "An error occured " + error.message);
            return util.send(res);
        }
    }
}
export default courseTeacherController;