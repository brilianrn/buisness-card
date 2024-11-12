import { ILoginPayload } from '../domain/request';
import IAuthRepository from '../ports/repository';
import IAuthUseCase from '../ports/usecase';

export class UseCase implements IAuthUseCase {
  private repository: IAuthRepository;

  constructor(repository: IAuthRepository) {
    this.repository = repository;
  }

  login = async (body: ILoginPayload) => await this.repository.login(body);
}
