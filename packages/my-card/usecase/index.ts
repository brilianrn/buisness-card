import IMyCardRepository from '../ports/repository';
import IMyCardUseCase from '../ports/usecase';

export class UseCase implements IMyCardUseCase {
  private repository: IMyCardRepository;

  constructor(repository: IMyCardRepository) {
    this.repository = repository;
  }

  profile = async () => await this.repository.profile();
}
