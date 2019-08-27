import ctController from '../controllers/courseTeacherController';
import {Router} from 'express';

const router = Router();
router.get('/',ctController.getAll);
router.get('/:id',ctController.getOne);
router.post('/',ctController.adder);
router.delete('/:id',ctController.delete);
router.put('/:id',ctController.udpdate);
export default router;