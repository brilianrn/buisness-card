import { ILoginPayload, IRegisterPayload } from '../domain/request';
import IAuthRepository from '../ports/repository';
import IAuthUseCase from '../ports/usecase';

export class UseCase implements IAuthUseCase {
  private repository: IAuthRepository;

  constructor(repository: IAuthRepository) {
    this.repository = repository;
  }

  login = async (body: ILoginPayload) => await this.repository.login(body);

  register = async (body: IRegisterPayload) => await this.repository.register(body);

  forgotPassword = async (email: string) => await this.repository.forgotPassword(email);
}
