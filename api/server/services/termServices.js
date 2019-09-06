import database from '../../models';
import sequelize from 'sequelize';
const op = sequelize.Op;
class termServices {
    static async addNew(newEntry) {
        try {
            const added = await database.Term.create(newEntry);
            if (Object.values(added).length > 1) {
                return added;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async deleter(id) {
        try {
            const deleted = await database.Term.destroy({
                where: {
                    markId: id
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
            const updated = await database.Term.update(updated_, {
                where: {
                    markId: id
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
            return await database.Term.findAll({
                attributes: {
                    exclude: ['classId', 'createdAt', 'updatedAt']
                }
            });

        } catch (error) {
            throw error;
        }
    }

    static async getOneComplex(id) {
        try {
            const foundTerm = await database.Term.findAll({
                attributes: {
                    exclude: ['classId', 'createdAt', 'updatedAt']
                },
                where: {
                    markId: id
                }
            });
            if (Object.values(foundTerm).length >= 1) {
                return foundTerm;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
    static async getOnePerClass(id,term,course) {
        try {
            const foundTerm = await database.Term.findAll({
                attributes: {
                    exclude: ['classId', 'createdAt', 'updatedAt']
                },
                
                where: {
                   [op.and] :[
                       {classId:id},
                       {term:term},
                       {course:course}
                   ]
                }
            });
            if (Object.values(foundTerm).length >= 1) {
                return foundTerm;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
    static async getReportContents(StudentId,Term,ClassId){
        try {
            const foundTerm = await database.Term.findAll({
                attributes:{
                    exclude :['classId','createdAt','updatedAt']
                },
                where:{
                    [op.and]:[
                        {studentId:StudentId},
                        {term:Term},
                        {classId:ClassId}
                    ]
                },
                // order:[['']]
            });
            if (Object.values(foundTerm).length >=1){
                return foundTerm;
            }else{
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
}
export default termServices;