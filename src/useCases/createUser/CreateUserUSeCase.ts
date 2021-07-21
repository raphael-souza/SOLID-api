import { User } from '../../entities/User';
import { IMailProvider } from '../../Provides/IMailProvider';
import { IUserRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUSeCase {

  // inversão de dependencias 
  constructor(
    private usersRepository: IUserRepository,
    private mailProvider: IMailProvider) {
    
  }
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: "Equipe do meu App",
        email: "equipe@meuapp.com"
      },
      subject: "seja bem vindo a plataforma",
      body: '<p> já pode fazer login na plataforma! </p>'
    })
  }
}