import database from '../../models';

class decisionService {
    static async addNew(newEntry) {
        try {
            const added = await database.decision.create(newEntry);
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
            const deleted = await database.decision.destroy({
                where: {
                    decisionId: id
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
            const updated = await database.decision.update(updated_, {
                where: {
                    decisionId: id
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
    static async get_defined_decision() {
        try {
            const decision = await database.decision.findAll({
                attributes: ['year', 'decisionId', 'studentId', 'studentNames', 'decision','classId']
            });
            if (decision) {
                return decision;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async getAll() {
        try {
            return await database.decision.findAll();

        } catch (error) {
            throw error;
        }
    }
    static async getOne(id) {

        try {
            
            const foundTerm = await database.decision.findOne({
                attributes :[ 'year','studentId','studentNames','decision','decisionId'],
                where: {
                    classId: id
                }
            });
            if (foundTerm) {
                return foundTerm;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}
export default decisionService;