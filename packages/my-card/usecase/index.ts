import { IEditPayload } from '../domain/request';
import IMyCardRepository from '../ports/repository';
import IMyCardUseCase from '../ports/usecase';
import { TEmail, TPhone, TWebsite } from '../presentation/dto/request';

export class UseCase implements IMyCardUseCase {
  private repository: IMyCardRepository;

  constructor(repository: IMyCardRepository) {
    this.repository = repository;
  }

  profile = async () => await this.repository.profile();

  updateProfile = async (payload: IEditPayload) => await this.repository.updateProfile(payload);

  updateSosmed = async (payload: IEditPayload) => await this.repository.updateSosmed(payload);

  changeImage = async (base64: string) => await this.repository.changeImage(base64);

  createPhone = async (payload: TPhone) => await this.repository.createPhone(payload);

  updatePhone = async (payload: TPhone & { id: string }) =>
    await this.repository.updatePhone(payload);

  deletePhone = async (id: string) => await this.repository.deletePhone(id);

  createEmail = async (payload: TEmail) => await this.repository.createEmail(payload);

  updateEmail = async (payload: TEmail & { id: string }) =>
    await this.repository.updateEmail(payload);

  deleteEmail = async (id: string) => await this.repository.deleteEmail(id);

  createWebsite = async (payload: TWebsite) => await this.repository.createWebsite(payload);

  updateWebsite = async (payload: TWebsite & { id: string }) =>
    await this.repository.updateWebsite(payload);

  deleteWebsite = async (id: string) => await this.repository.deleteWebsite(id);
}
