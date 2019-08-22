import database from '../../models';
import sequelize from 'sequelize';
const op = sequelize.Op;
class classService {
    static async getAllClasses() {
        try {
            return await database.Classes.findAll();
        } catch (error) {
            throw error;
        }
    }
    static async getOneClass(id) {
        try {
            const ClassToFind = await database.Classes.findOne({
                where: {
                    classId: id
                }
            });
            if (ClassToFind) {
                return ClassToFind;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async AddClass(newClass) {
        try {
            return await database.Classes.create(newClass);
        } catch (error) {
            throw error;
        }
    }
    static async updateClass(id, newClass) {
        try {
            const classToUpdate = await database.Classes.findOne({
                where: {
                    classId: id
                }
            });
            if (Object.values(classToUpdate).length >= 1) {
                await database.Classes.update(newClass, {
                    where: {
                        classId: id
                    }
                });
                return newClass;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async deleteClass(id) {
        try {
            const classToDelete = await database.Classes.findOne({
                where: {
                    classId: id
                }
            });
            if (classToDelete) {
                await database.Classes.destroy({
                    where: {
                        classId: id
                    }
                });
                return classToDelete;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}

export default classService;