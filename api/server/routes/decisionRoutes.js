import decision from '../controllers/decisionController';
import {Router} from 'express';
const router = Router();
router.get('/',decision.getAll);
router.get('/:id',decision.getOne);
router.post('/',decision.adder);
router.put('/:decisionId',decision.udpdate);
router.delete('/:decisionId',decision.delete);
export default router;
