import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthanticated from '../middlewares/ensureAuthanticated';
import ProfileController from '../controllers/ProfileController';

const profileController = new ProfileController();

const profileRouter = Router();

profileRouter.use(ensureAuthanticated);

profileRouter.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  profileController.show,
);
profileRouter.put('/', profileController.update);

export default profileRouter;
