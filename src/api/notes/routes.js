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
      handler: (request, h) => handler.postNoteHandler(request, h),
      options: {
        auth: 'notesapp_jwt',
      },
    },
    {
      method: 'GET',
      path: '/notes',
      handler: (request) => handler.getNotesHandler(request),
      options: {
        auth: 'notesapp_jwt',
      },
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: (request) => handler.getNoteByIdHandler(request),
      options: {
        auth: 'notesapp_jwt',
      },
    },
    {
      method: 'PUT',
      path: '/Putnotes/{id}',
      handler: (request) => handler.putNoteByIdHandler(request),
      options: {
        auth: 'notesapp_jwt',
      },
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: (request) => handler.deleteNoteByIdHandler(request),
      options: {
        auth: 'notesapp_jwt',
      },
    },
  ];
  
  module.exports = routes;
  