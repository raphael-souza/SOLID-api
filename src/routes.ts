import { Router } from "express";
import { createUserController } from "./useCases/createUser";

const router = Router();

router.get('/', (request, response) => {
  console.info("get --> users")

  return response.json({ message: "SOLID API"})
});

router.post('/users', (request, response) => {
  // return response.status(201).send();
  console.info("post --> users")
  return createUserController.handle(request, response)
});

export { router }