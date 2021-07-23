import { CreateUserUSeCase } from "./CreateUserUSeCase";
import { Request, Response } from "express";
export class CreateUserController {
  constructor (
    private createUserUseCase: CreateUserUSeCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
   
    console.log(request.body);
    const { name, email, password } = request.body;

    try {
      console.info('enviando email de notificação');
      await this.createUserUseCase.execute({
        name,
        email,
        password
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ message: err.message || 'unespected error'});
    }
  }
}