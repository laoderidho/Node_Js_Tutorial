const NotesHandler = require("./handler");
const router = require("./router");

module.exports = {
  name: "notes",
  version: "1.0.0",
  register: async (server, { service, validator }) => {
    const notesHandler = new NotesHandler(service, validator);
    server.route(router(notesHandler));
  },
};
