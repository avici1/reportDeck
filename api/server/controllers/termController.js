import termService from '../services/termServices';
import Util from '../utils/Util';

const util = new Util();
class termController {


    static async getAll(req, res) {
        try {
            const all = await termService.getAll();
            if (Object.values(all).length < 1) {
                util.setError(400, "Records can't be found");
                return util.send(res);
            } else {
                util.setSuccess("Records found successfully", 200, all);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
    static async getParticulars(req, res) {
        const {
            id
        } = req.params;
        try {
            const one = await termService.getOneComplex(id);
            if (!one) {
                util.setError(400, "Term can't be found");
                return util.send(res);
            } else {
                util.setSuccess("Term found", 200, one);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
    static async getParticularsPerClass(req, res) {
        try {
            const one = await termService.getOnePerClass(req.params.classId,req.params.term);
            if (!one) {
                util.setError(400, "Term can't be found");
                return util.send(res);
            } else {
                util.setSuccess("Term found", 200, one);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message + ' >>> ' + req.params.classId + ' >>> ' + req.params.term);
            return util.send(res);
        }
    }
    static async deleteTerm(req, res) {
        try {
            const {
                id
            } = req.params;
            const deleted = await termService.deleter(id);
            if (!deleted) {
                util.setError(400, "Term can't be found");
                return util.send(res);
            } else {
                util.setSuccess("Deleted successfully", 200, deleted);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
    static async updateTerm(req, res) {
        const {
            id
        } = req.params;
        const updated = req.body;

        try {

            if ((Object.values(updated).length >= 1) == false) {
                util.setError(404, `sent empty fields`);
                return util.send(res);
            } else {
                const updated_class = await termService.updater(id, updated);
                if (!updated_class) {
                    util.setError(404, `cant update a class`);
                    return util.send(res);
                } else {
                    util.setSuccess('records updated successfully', 200, updated_class);
                    return util.send(res);
                }

            }

        } catch (error) {
            util.setError(404, 'Oops something Went wrong cant update the book >> ' + error.message);
            return util.send(res);
        }

    }
    static async addNewRecord(req, res) {
        try {
            const markId_ = req.body.studentId+'-'+req.body.course+'-'+req.body.classId+'-'+req.body.term
            const newRecord = {
                studentId:req.body.studentId,
                studentNames:req.body.studentNames,
                maxTj: req.body.maxTj,
                tj:req.body.tj,
                maxExam: req.body.maxExam,
                exam: req.body.exam,
                classId:req.body.classId,
                course:req.body.course,
                term:req.body.term,
                markId:markId_
            }
            //  const lookUp = await termService.getOneComplex(req.query.classId, req.query.term, req.query.studentId, req.query.course);
            const added = await termService.addNew(newRecord);
            if (Object.values(added).length >= 1) {
                util.setSuccess("Added successfully", 200, added);
                return util.send(res);
            } else {
                util.setError(400, "Can't add new record");
                return util.send(res);
            }

        } catch (error) {

            util.setError(400, `Oops something went wrong >> ${error.message}`);
            return util.send(res);
        }
    }
}
export default termController;