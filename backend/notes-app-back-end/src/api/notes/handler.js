class NotesHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postNoteHandler = this.postNoteHandler.bind(this);
    this.getNotesHandler = this.getNotesHandler.bind(this);
    this.getNoteByIdHandler = this.getNoteByIdHandler.bind(this);
    this.putNoteByIdHandler = this.putNoteByIdHandler.bind(this);
    this.deleteNoteByIdHandler = this.deleteNoteByIdHandler.bind(this);
  }

  async postNoteHandler(request, res) {
    try {
      this._validator.validateNotePayload(request.payload);
      const { title = "untitled", body, tags } = request.payload;

      const noteId = await this._service.addNotes({ title, body, tags });

      const response = res.response({
        status: "success",
        message: "Catatan berhasil ditambahkan",
        data: {
          noteId,
        },
      });

      response.code(201);
      return response;
    } catch (error) {
      const response = res.response({
        status: "fail",
        message: error.message,
      });

      response.code(400);
      return response;
    }
  }

  async getNotesHandler() {
    const notes = await this._service.getNotes();
    return {
      status: "success",
      data: {
        notes,
      },
    };
  }

  async getNoteByIdHandler(request) {
    const { id } = request.params;
    const note = await this._service.getNoteById(id);
    return {
      status: "success",
      data: {
        note,
      },
    };
  }

  async putNoteByIdHandler(request, res) {
    try {
      const { id } = request.params;

      this._validator.validateNotePayload(request.payload);
      await this._service.editNoteById(id, request.payload);

      return {
        status: "success",
        message: "Catatan berhasil diperbarui",
      };
    } catch (error) {
      const response = res.response({
        status: "fail",
        message: error.message,
      });

      response.code(404);
      return response;
    }
  }

  async deleteNoteByIdHandler(request, res) {
    try {
      const { id } = request.params;

      await this._service.deleteNoteById(id);

      return {
        status: "success",
        message: "Catatan berhasil dihapus",
      };
    } catch (err) {
      const response = res.response({
        status: "fail",
        message: err.message,
      });

      response.code(404);
      return response;
    }
  }
}

module.exports = NotesHandler;
