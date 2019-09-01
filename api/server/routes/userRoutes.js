import user from '../controllers/userController';
import {Router} from 'express';

const router = new Router();

router.post('/',user.createUser);
export default router;