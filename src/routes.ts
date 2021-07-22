import { Router } from "express";
import { createUserController } from "./useCases/createUser";

export const router = Router();

router.get('/', async (request, response) => {  

  return response.send("SOLID API GET");
});

router.post('/', async (request, response) => {
  
  return createUserController.handle(request, response)
});