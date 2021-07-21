import { MailtrapMailProvider } from "../../Provides/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUSeCase } from "./CreateUserUSeCase";

const postgresUsersRepository = new PostgresUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUSeCase(
  postgresUsersRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController };