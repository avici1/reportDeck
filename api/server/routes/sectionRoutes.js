import section from '../controllers/sectionController';
import {Router} from 'express';
const router = Router();
router.get('/',section.getAll);
router.get('/:schoolId',section.getOne);
router.post('/',section.adder);
router.put('/:sectionId',section.udpdate);
router.delete('/:sectionId',section.delete);
export default router;
