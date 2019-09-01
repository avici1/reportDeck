import {Router} from 'express';
import report from '../controllers/viewController';
const router = Router();
router.get('/',report.getMainView);
export default router;