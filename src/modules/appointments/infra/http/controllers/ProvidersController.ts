import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderService from '@modules/appointments/services/ListProviderService';
import { classToClass } from 'class-transformer';

export default class ListProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listProvider = container.resolve(ListProviderService);

    const provider = await listProvider.execute({
      user_id,
    });

    return response.json(classToClass(provider));
  }
}
