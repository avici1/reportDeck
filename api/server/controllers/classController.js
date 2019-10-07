import ClassService from '../services/classServices';
import Util from '../utils/Util';
import classService from '../services/classServices';
import courseTeacherService from '../services/courseTeacherService';
const util = new Util();

class ClassController {
    static async getListClass(req, res) {
        try {
            const classList = await ClassService.getAllClasses();
            if (Object.values(classList).length >= 1) {
                util.setSuccess("Classes Found", 200, classList);
                return util.send(res);

            } else {
                util.setError("Classes Not Found", 200, {});
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }

    }
    static async addClasses(req, res) {
        try {
            if (!req.body.classYear || !req.body.classId || !req.body.classMasterTeacher || !req.body.classSection || !req.body.classLevel) {
                util.setError(400, 'Please send accurate info');
                return util.send(res);
            } else {
                const newClass = req.body;
                const addingClass = await ClassService.AddClass(newClass);
                util.setSuccess('Class added', 201, addingClass);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
    static async deleteClasses(req, res) {
        const {
            id
        } = req.params;
        if (id == null) {
            util.setError(404, 'Please provide a valid parameter');
            return util.send(res);
        } else {
            try {
                const deletedClass = await classService.deleteClass(id);
                const deletedCourseTeacher = await courseTeacherService.deleter(id);
                if (!deletedClass || !deletedCourseTeacher) {
                    util.setError(404, `Class with Id ${id} not found`);
                    return util.send(res);
                } else {
                    util.setSuccess(`Class with Id ${id} deleted successfully`, 200, deletedClass);
                    return util.send(res);
                }

            } catch (error) {
                util.setError(404, `can't delete the class >> ${error.message}`);
                return util.send(res);
            }



        }
    }
    static async updateClass(req, res) {
        const {
            id
        } = req.params;
        const updated = req.body;
        if (id == null) {
            util.setError(404, 'Please provide a valid parameter');
            return util.send(res);

        } else {
            try {

                if ((Object.values(updated).length >= 1) == false) {
                    util.setError(404, `sent empty fields`);
                    return util.send(res);
                } else {
                    const updated_class = await classService.updateClass(id, updated);
                    if (Object.values(updated_class).length >= 1) {
                        util.setSuccess('Classes updated successfully', 200, updated_class);
                        return util.send(res);

                    } else {
                        util.setError(404, `cant update a class`);
                        return util.send(res);
                    }

                }

            } catch (error) {
                util.setError(404, 'Oops something Went wrong cant update the book >> ' + error.message);
                return util.send(res);
            }
        }
    }
    static async getOneClass_(req, res) {
        const {
            id
        } = req.params;

        try {
            const oneClass = await ClassService.getOneClass(id);

            if (Object.values(oneClass).length >= 1) {
                util.setSuccess(`Class is found`, 200, oneClass);
                return util.send(res);
            } else {
                util.setError(404, `Can't find the class with Id ${id}`);
                return util.send(res);
            }

        } catch (error) {
            util.setError(404, `Can't find the class with Id ${id}`);
            return util.send(res);
        }
    }
}

export default ClassController;