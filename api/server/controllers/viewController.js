import service from '../services/termServices';
class viewController{
    static async getReport(req,res){
        const term = req.params.term;
        const id = req.params.studentId;
        const marks = await service.getReportContents(id,term);
        if(marks == null) {
            return res.render('report', {error :"Can't find what you're looking for"});
        }else {
            
        }
        return res.render('report');
    }
}

export default viewController;