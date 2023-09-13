/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
const routes = (handler) => [
    {
      method: 'POST',
      path: '/notes',
      handler: handler.postNoteHandler,
      options: {
        auth: 'notesapp_jwt',
      },
    },
    {
      method: 'GET',
      path: '/notes',
      handler: handler.getNotesHandler,
      options: {
        auth: 'notesapp_jwt',
      },
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: handler.getNoteByIdHandler,
      options: {
        auth: 'notesapp_jwt',
      },
    },
    {
      method: 'PUT',
      path: '/Putnotes/{id}',
      handler: handler.putNoteByIdHandler,
      options: {
        auth: 'notesapp_jwt',
      },
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: handler.deleteNoteByIdHandler,
      options: {
        auth: 'notesapp_jwt',
      },
    },
  ];
  
  module.exports = routes;
  