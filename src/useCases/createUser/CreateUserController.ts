import { CreateUserUSeCase } from "./CreateUserUSeCase";
import { Request, Response } from "express";
import { app } from "../../app";
export class CreateUserController {
  constructor (
    private createUserUseCase: CreateUserUSeCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
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