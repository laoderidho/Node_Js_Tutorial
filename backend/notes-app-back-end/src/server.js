const Hapi = require("@hapi/hapi");
const NotesService = require("./services/postgres/NotesServices");
const notes = require("./api/notes");
const NotesValidator = require("./validator/notes");

require("dotenv").config();

const init = async () => {
  const notesService = new NotesService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      service: notesService,
      validator: NotesValidator,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
