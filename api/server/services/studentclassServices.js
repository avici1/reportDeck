import database from '../../models';
import sequelize from 'sequelize';
const op = sequelize.Op;
class studentsClasservices{
    static async addNew(newEntry){
        try {
            const added = await database.studentsClass.create(newEntry);
            if(added){
                return added;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async deleter(id){
        try {
            const deleted = await database.studentsClass.destroy({where:{studentId:id}});
            if(deleted){
                return deleted;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async updater(id,updated_){
        try {
            const updated = await database.studentsClass.update(updated_,{where:{studentId:id}});
            if(updated){
                return updated;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async getAll(){
        try {
            return await database.studentsClass.findAll({
                attributes :{exclude :['id','createdAt','updatedAt']},
            });

        } catch (error) {
            throw error;
        }
    }
    static async getOne(id){
        try {
            const foundTerm = await database.studentsClass.findAll({
                attributes :{exclude :['id','createdAt','updatedAt']},
                where : {
                    [op.or]:[
                        {studentId:{[op.like]: '%' + searchParam +'%'}},
                        {classId: {[op.like] : '%' + searchParam + '%'}}
                    ]
                }
            })
            if(foundTerm){
                return foundTerm;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}
export default studentsClasservices;