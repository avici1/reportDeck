import { Router } from 'express';
import  views from '../controllers/viewController';

const router = new Router();

router.get('/:studentId/:term',views.getReport);
export default router;