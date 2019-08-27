import database from '../../models';

class courseTeacherService {
    static async addNew(newEntry) {
        try {
            const added = await database.courseTeacher.create(newEntry);
            if (Object.values(added).length >= 1) {
                return added;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async deleter(id) {
        try {
            const deleted = await database.courseTeacher.destroy({
                where: {
                    classId: id
                }
            });
            if (deleted) {
                return deleted;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async updater(id, updated_) {
        try {
            const updated = await database.courseTeacher.update(updated_, {
                where: {
                    classId: id
                }
            });
            if (updated) {
                return updated;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async getAll() {
        try {
            const raw = await database.courseTeacher.findAll({
                attributes : { exclude : ['id','createdAt','updatedAt','classId']}
            });
            return raw;

        } catch (error) {
            throw error;
        }
    }
    static async getOne_(id) {
        try {
            const foundTerm = await database.courseTeacher.findAll({
                where: {
                    classId: id
                }
            });
            if (Object.values(foundTerm).length >= 1) {
                return foundTerm;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}
export default courseTeacherService;