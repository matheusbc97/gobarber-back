import { Router } from 'express';

import ensureAuthanticated from '../middlewares/ensureAuthanticated';
import ProfileController from '../controllers/ProfileController';

const profileController = new ProfileController();

const profileRouter = Router();

profileRouter.use(ensureAuthanticated);

profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);

export default profileRouter;
