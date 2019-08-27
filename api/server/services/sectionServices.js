import database from '../../models';

class sectionsService{
    static async addNew(newEntry){
        try {
            const added = await database.sections.create(newEntry);
            if(Object.values(added).length>=1){
                return added;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async deleter(id){
        try {
            const deleted = await database.sections.destroy({where:{schoolId:id}});
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
            const updated = await database.sections.update(updated_,{where:{sectionId:id}});
            if(updated){
                return updated;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async get_defined_sections(){
        try {
            const sections = await database.sections.findAll({
                attributes : ['sectionId', 'sectionName']
            });
            if(sections){
                return sections;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async getAll(){
        try {
            return await database.sections.findAll();

        } catch (error) {
            throw error;
        }
    }
    static async getOne(id){
        try {
            const foundTerm = await database.sections.findOne({where:{schoolId:id}});
            if(Object.values(foundTerm).length >=1){
                return foundTerm;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}
export default sectionsService;