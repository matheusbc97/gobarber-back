import { Router } from 'express';
import ensureAuthanticated from '@modules/users/infra/http/middlewares/ensureAuthanticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentRouter.use(ensureAuthanticated);

/*
appointmentRouter.get('/', async (req, res) => {
  const appointments = await appointmentsRepository.find();

  return res.json(appointments);
}); */

appointmentRouter.post('/', appointmentsController.create);

export default appointmentRouter;
