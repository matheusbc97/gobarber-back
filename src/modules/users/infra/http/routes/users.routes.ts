import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthanticated from '../middlewares/ensureAuthanticated';
import UsersController from '../controllers/UsersControllers';
import UserAvatarController from '../controllers/UserAvatarController';

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthanticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
