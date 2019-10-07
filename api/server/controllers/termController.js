import termService from '../services/termServices';
import studentService from '../services/studentServices';
import classService from '../services/classServices';
import Util from '../utils/Util';
import termServices from '../services/termServices';

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
                util.setError(400, "Record can't be found");
                return util.send(res);
            } else {
                util.setSuccess("Record found", 200, one);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
    static async getParticularsPerClass(req, res) {
        try {
            const one = await termService.getOnePerClass(req.params.classId,req.params.term,req.params.course);
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
    static async getMarksForReport(req, res) {
        try {
            const one = await termService.getReportContents(req.params.studentId,req.params.term,req.params.classId);
            if (one) {
                let totals={
                    tj:0,
                    maxTj:0,
                    exam:0,
                    maxExam:0,
                    percentage:0,
                };
                const date = new Date();
                one.forEach((data)=>{
                    totals.tj += data.tj;
                    totals.maxtj += data.maxtj;
                    totals.exam += data.exam;
                    totals.maxExam += data.maxExam;
                });
                const classData = await classService.getOneClass(req.params.classId);
                const studentData = await studentService.getStudentById(req.params.studentId);
                totals.percentage = (((totals.tj+totals.exam)*100)/(totals.maxExam + totals.maxTj)).toFixed(2);
                return res.render('report',{marks:one,classData:classData,studentData:studentData,date:date,totals_:totals,studentId:req.params.studentId,term:req.params.term,classId:req.params.classId});
            } else {
                return res.render('report',{marks:one});
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
            let bulkData = [];
            req.body.forEach(data => {
                const markId_ = data.studentId+'-'+data.course+'-'+data.classId+'-'+data.term;
                const newRecord = {
                    studentId:data.studentId,
                    studentNames:data.studentNames,
                    maxTj: data.maxTj,
                    tj:data.tj,
                    maxExam: data.maxExam,
                    exam: data.exam,
                    classId:data.classId,
                    course:data.course,
                    term:data.term,
                    markId:markId_
                };
                bulkData.push(newRecord);
               
            });
           const added = await termServices.addNew(bulkData);
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