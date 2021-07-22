import { app } from "./app";

const server = app.listen(3333, () => {
  console.info('ouvindo porta 3333');

  process.on('SIGINT', () => {
    server.close();

    console.info("app finalizado!");
  })
});