import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentServer from '../services/CreateAppointmentServer';

import ensureAuthanticated from '../middlewares/ensureAuthanticated';

const appointmentRouter = Router();

appointmentRouter.use(ensureAuthanticated);

appointmentRouter.get('/', async (req, res) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return res.json(appointments);
});

appointmentRouter.post('/', async (req, res) => {
  try {
    const { provider_id, date } = req.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentServer();

    const appointment = await createAppointment.execute({
      date: parsedDate,
      provider_id,
    });

    return res.json(appointment);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export default appointmentRouter;
