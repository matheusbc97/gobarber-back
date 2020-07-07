import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAccountDTO from '../dtos/ICreateAccountDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAccountDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
