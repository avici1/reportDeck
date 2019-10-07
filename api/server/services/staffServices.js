import database from '../../models';
import sequelize from 'sequelize';
const op = sequelize.Op;
class staffService {
    static async GetAllStaff() {
        try {
            return await database.Staff.findAll({
                attributes : ['staffId','staffNames']
            });
        } catch (error) {
            throw error;
        }
    }

    static async SearchStaff(searchParam) {
        try {
            const staff = await database.Staff.findAll({
                attributes :{exclude :['id','createdAt','updatedAt']},
                where: {

                    [op.or]: [
                        { staffId: { [op.iLike]: '%' + searchParam + '%' } },
                        { staffNames: { [op.iLike]: '%' + searchParam + '%' } },
                        { staffTitle: { [op.iLike]: '%' + searchParam + '%' } },
                        
                    ]
                }
            });
            if (staff) {
                return staff;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async searchTeacher() {
     try {
         const teacher =await database.Staff.findAll({
             attributes : ['staffId','staffNames'],
             where: {
                 staffTitle: 'Teacher'
             }
         });
         if(teacher){
             return teacher;
         }
         return null;
     } catch (error) {
         throw error;
     }
    }
    static async AddStaff(newStaff) {
        try {
            return await database.Staff.create(newStaff);
        } catch (error) {
            throw error;
        }
    }
    static async UpdateStaff(id, newStaff) {
        try {
            const StaffToUpdate = await database.Staff.findOne({ where: { staffId: id } });
            if (StaffToUpdate) {
                await database.Staff.update(newStaff, { where: { staffId: id } });
                return newStaff;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async DeleteStaff(id) {
        try {
            const staffToDelete = await database.Staff.findOne({ where: { staffId: id } });
            if (staffToDelete) {
                return await database.Staff.destroy({ where: { staffId:id } });
            }
        } catch (error) {
            throw error;
        }
    }
}
export default staffService;